import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';
import { google } from '@/constants/general';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/account/error',
    newUser: '/auth/register',
  },
  providers: [
    GoogleProvider({
      clientId: google.client,
      clientSecret: google.secret,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (token?.jwt) {
        session.id = token.id as number;
        //@ts-ignore
        session.jwt = token.jwt as string;
      }
      return Promise.resolve(session);
    },
    jwt: async ({ token, user, account }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        //@ts-ignore
        token.id = user?.id;
        //@ts-ignore
        token.username = user?.username;
      }
      return Promise.resolve(token);
    },
  },
};

export default NextAuth(authOptions);
