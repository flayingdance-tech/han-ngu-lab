export class ApiError extends Error { constructor(message: string, public status: number) { super(message); } }
export async function api<T>(path: string, body?: unknown, method?: string): Promise<T> {
  const res = await fetch(`/api${path}`, {
    method: method ?? (body === undefined ? 'GET' : 'POST'), credentials: 'same-origin',
    headers: body === undefined ? {} : { 'Content-Type': 'application/json', 'X-HNL-Client': 'web' },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  const data = await res.json().catch(() => ({ error: 'Máy chủ chưa sẵn sàng. Hãy thử lại.' }));
  if (!res.ok) throw new ApiError(data.issues?.length ? `${data.error} ${data.issues.map((x: {path:string;message:string}) => `${x.path}: ${x.message}`).join('; ')}` : data.error ?? 'Có lỗi xảy ra.', res.status);
  return data;
}
export function downloadJson(value: unknown, name: string) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = name; link.click(); URL.revokeObjectURL(url);
}
