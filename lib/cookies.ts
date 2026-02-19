export const SESSION_COOKIE = "session";

export function makeSessionValue(userId: string) {
  return `uid:${userId}`;
}
