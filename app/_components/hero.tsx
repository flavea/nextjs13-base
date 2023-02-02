'use client';

import { useEffect } from 'react';

import { Card } from '@/design';
import useProfileStore from '@/store/profile';
import Image from 'next/image';

export const Hero = () => {
  const { profile, getProfile } = useProfileStore();

  useEffect(() => {
    if (!profile) getProfile();
  }, []);

  return (
    <>
      <Card className="align-center my-10 flex flex-col items-center justify-center">
        <span className="rounded border border-black p-1 px-3 font-bold uppercase">
          NEXTJS 13
        </span>
        <h2 className="my-2 text-center text-4xl font-bold lg:text-left xl:text-6xl xl:leading-tight">
          Contoh code nextjs
        </h2>
        <p className="text-center text-lg md:text-2xl lg:mb-8 lg:text-left xl:text-3xl xl:leading-tight">
          next-auth, tailwind, styled-components, zustand
        </p>
      </Card>
      {profile?.results?.map((p: any) => (
        <Card
          className="align-center my-10 flex flex-col items-center justify-center"
          key={p.name.email}
        >
          <Image
            src={p.picture.large}
            width={100}
            height={100}
            className="rounded-full"
            alt="image"
          />
          <h2 className="my-2 text-center text-4xl font-bold lg:text-left xl:text-6xl xl:leading-tight">
            {p.name.title} {p.name.first} {p.name.last}
          </h2>
          <span className="rounded border border-black p-1 px-3 font-bold uppercase">
            {p.gender}
          </span>
          Ini contoh rendering client component dari API
        </Card>
      ))}
    </>
  );
};

export default Hero;
