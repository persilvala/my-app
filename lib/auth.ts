import { findUserByEmail } from "./store";

export function validateUser(email: string, password: string) {
  const user = findUserByEmail(email);

  if (!user) return null;
  if (user.password !== password) return null;

  return {
    id: user.id,
    email: user.email,
  };
}
