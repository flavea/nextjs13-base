'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const AuthBox = styled.div`
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.3);
`;

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden bg-mute text-black">
      <section className="m-auto min-h-screen py-16 px-8  md:flex md:w-[540px] md:flex-col md:justify-center md:p-0 md:pb-8">
        <p className="mb-5 text-center text-base font-medium lg:mb-12 lg:text-2xl">
          Experience more of what we has to offer by logging in or signing up.
          Whatever’s easy for you.
        </p>
        <AuthBox className="mg-5 relative overflow-hidden rounded-xl bg-mute p-6 md:p-9">
          {children}
        </AuthBox>
      </section>
    </div>
  );
}
