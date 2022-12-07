const USER_EMAIL_KEY_NAME = 'user-email';

export type Email = string;

export const getEmail = (): Email => {
  const token = localStorage.getItem(USER_EMAIL_KEY_NAME);
  return token ?? '';
};

export const saveEmail = (token: Email): void => {
  localStorage.setItem(USER_EMAIL_KEY_NAME, token);
};

export const dropEmail = (): void => {
  localStorage.removeItem(USER_EMAIL_KEY_NAME);
};
