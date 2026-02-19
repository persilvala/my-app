export type User = {
  id: string;
  email: string;
  password: string;
};

declare global {
  // eslint-disable-next-line no-var
  var __users: User[] | undefined;
}

const users: User[] = globalThis.__users ?? (globalThis.__users = []);

export function findUserByEmail(email: string) {
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function createUser(email: string, password: string) {
  const newUser: User = {
    id: String(users.length + 1),
    email,
    password,
  };

  users.push(newUser);
  return newUser;
}
