'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/design/Button';
import { useSession, signOut } from 'next-auth/react';
import If from '../If';
import useProfileStore from '@/store/profile';

const GlobalNavigation = () => {
  const { getProfile } = useProfileStore();
  const { data: session } = useSession();

  useEffect(() => {
    const t = setTimeout(() => {
      //@ts-ignore
      if (session && !session?.id) {
        signOut();
      }
    }, 300);

    return () => clearTimeout(t);
  }, [session, getProfile]);

  return (
    <>
      <section className="sticky top-0 left-0 z-50 bg-mute py-3">
        <nav className="m-auto flex h-10 max-w-7xl items-center justify-between px-6 align-middle">
          <div className="flex items-center gap-4">
            <Link href="/" className="mr-8">
              <Image src="/vercel.svg" width={80} height={28} alt="Logo" />
            </Link>
            <Link href="/" className="font-bold">
              Home
            </Link>
            <Link href="/" className="font-bold">
              Menu 2
            </Link>
            <Link href="/" className="font-bold">
              Menu 3
            </Link>
          </div>
          <div className="flex gap-1">
            <If condition={Boolean(session?.id)}>
              <Link href="/">
                <Button className="text-sm md:py-2 md:px-4">Profile</Button>
              </Link>
              <Button
                className="text-sm md:py-2 md:px-4"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </If>
            <If condition={!session}>
              <Link href="/auth/login">
                <Button className="text-sm md:py-2 md:px-4">Login</Button>
              </Link>
            </If>
          </div>
        </nav>
      </section>
    </>
  );
};

export default GlobalNavigation;
