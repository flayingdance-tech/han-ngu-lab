export const ONLINE_WINDOW_SECONDS = 120;
export const PRESENCE_HEARTBEAT_SECONDS = 30;
export const ONLINE_REFRESH_SECONDS = 15;
export type OnlineVisitorsSnapshot = { visitors: number; windowSeconds: number; refreshSeconds: number; asOf: string };
