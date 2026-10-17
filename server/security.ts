import { randomBytes, scrypt as scryptCallback, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';
const scrypt = promisify(scryptCallback);
export const token = () => randomBytes(32).toString('base64url');
export const digest = (value: string) => createHash('sha256').update(value).digest('hex');
export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = await scrypt(password, salt, 64) as Buffer;
  return `scrypt:${salt}:${hash.toString('hex')}`;
}
export async function checkPassword(password: string, stored: string) {
  const [, salt, value] = stored.split(':');
  if (!salt || !value) return false;
  const calculated = await scrypt(password, salt, 64) as Buffer;
  const expected = Buffer.from(value, 'hex');
  return expected.length === calculated.length && timingSafeEqual(expected, calculated);
}
