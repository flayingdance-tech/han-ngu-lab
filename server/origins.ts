/** Exact, server-configured origins only. The optional second origin is for a staged cutover. */
export function applicationOrigins(origin: string, stagingOrigin?: string) {
  const values = [origin, ...(stagingOrigin ? [stagingOrigin] : [])];
  for (const value of values) {
    let valid = false;
    try { const url = new URL(value); valid = url.protocol === 'https:' && url.origin === value; } catch { /* Fail closed. */ }
    if (!valid) throw new Error('Production origin phải là HTTPS origin chính xác.');
  }
  return new Set(values);
}
