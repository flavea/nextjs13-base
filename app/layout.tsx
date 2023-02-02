'use client';

import { ReactNode, useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import Image from 'next/image';

import GlobalNavigation from '@/components/GlobalNavigation';
import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/globals.scss';
import Router from 'next/router';
import Loader from '@/components/Loader';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, []);

  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <StyledComponentsRegistry>
          <body className="bg-mute">
            <GlobalNavigation />

            <Loader
              visible={loading}
              showText={false}
              style={{ position: 'fixed!important' }}
            />

            <main className="m-auto max-w-7xl overflow-x-hidden bg-mute text-black">
              {children}
              <footer className="flex flex-col items-center p-4 text-center xl:p-12">
                <Image
                  src="/vercel.svg"
                  alt="Logo"
                  width={150}
                  height={90}
                  className="hidden md:block"
                />
                <p className="mt-4 font-bold">
                  © {new Date().getFullYear()}. All rights reserved.
                </p>
              </footer>
            </main>
          </body>
        </StyledComponentsRegistry>
      </SessionProvider>
    </html>
  );
}
