import nodemailer, { type SendMailOptions } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import { z } from 'zod';

export const SES_SMTP_HOST = 'email-smtp.ap-southeast-2.amazonaws.com';
export type MailPurpose = 'verify' | 'reset';
export type SendMail = (email: string, purpose: MailPurpose, link: string) => Promise<void>;
type Transport = { sendMail: (message: SendMailOptions) => Promise<unknown> };
export type TransportFactory = (options: SMTPTransport.Options) => Transport;

export class EmailDeliveryError extends Error {
  constructor() { super('Không thể gửi email lúc này. Vui lòng thử lại sau.'); this.name = 'EmailDeliveryError'; }
}

/** Server-only: validate all configuration before constructing a transport. Never log SMTP errors. */
export function createSesMailer(env: Record<string, string | undefined>, factory: TransportFactory = options => nodemailer.createTransport(options)): SendMail {
  const username = env.SMTP_USERNAME;
  const password = env.SMTP_PASSWORD;
  const from = env.SMTP_FROM_EMAIL?.trim();
  let origin: URL;
  try {
    origin = new URL(env.APP_ORIGIN ?? '');
    if (origin.protocol !== 'https:' || origin.origin !== env.APP_ORIGIN) throw new Error();
    if (!username || !password || /[\r\n\0]/.test(username + password) || !from || !z.email().safeParse(from).success || /[\r\n]/.test(from)) throw new Error();
  } catch {
    throw new Error('Production email yêu cầu APP_ORIGIN HTTPS hợp lệ, SMTP_USERNAME, SMTP_PASSWORD và SMTP_FROM_EMAIL hợp lệ.');
  }
  const transport = factory({
    host: SES_SMTP_HOST, port: 587, secure: false, requireTLS: true,
    auth: { user: username, pass: password },
    tls: { minVersion: 'TLSv1.2', rejectUnauthorized: true, servername: SES_SMTP_HOST },
    connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000,
    pool: false, logger: false, debug: false,
    disableFileAccess: true, disableUrlAccess: true,
  });
  return async (email, purpose, link) => {
    try {
      if (!z.email().safeParse(email).success || /[\r\n]/.test(email) || !['verify', 'reset'].includes(purpose)) throw new Error();
      const url = new URL(link), params = new URLSearchParams(url.hash.slice(1));
      if (url.origin !== origin.origin || url.pathname !== '/' || url.search || !params.get(purpose) || [...params.keys()].length !== 1) throw new Error();
      const verify = purpose === 'verify';
      await transport.sendMail({
        from: { name: 'Hán Ngữ Lab', address: from }, to: { address: email, name: '' },
        subject: verify ? 'Xác minh tài khoản Hán Ngữ Lab' : 'Đặt lại mật khẩu Hán Ngữ Lab',
        text: [
          'Xin chào,', '',
          verify ? 'Vui lòng mở liên kết dưới đây để xác minh email của bạn tại Hán Ngữ Lab:' : 'Bạn đã yêu cầu đặt lại mật khẩu Hán Ngữ Lab. Vui lòng mở liên kết dưới đây:',
          link, '', 'Liên kết có hiệu lực trong 30 phút và chỉ được sử dụng một lần.',
          'Nếu bạn không yêu cầu thao tác này, hãy bỏ qua email. Không chia sẻ liên kết với người khác.',
          '', 'Hán Ngữ Lab — 汉语实验室',
        ].join('\n'),
        disableFileAccess: true, disableUrlAccess: true,
      });
    } catch {
      // SMTP responses may contain recipient addresses or credentials; discard the cause.
      throw new EmailDeliveryError();
    }
  };
}
