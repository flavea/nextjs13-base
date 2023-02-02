export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const google: { client: string; secret: string } = {
  client: process.env.GOOGLE_CLIENT || '',
  secret: process.env.GOOGLE_SECRET || '',
};
