import Button from '@/design/Button';
import clsx from 'clsx';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Router } from 'next/router';

export default function GoogleButton({
  kind = 'primary',
  className,
  text = 'Login',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'primary' | 'secondary';
  text?: string;
}) {
  return (
    <Button
      className={clsx(
        'flex w-full items-center justify-center text-lg text-[#666] shadow hover:shadow-md md:p-3',
        className,
      )}
      kind="default"
      onClick={async (e) => {
        e.preventDefault();
        const result = await signIn('google', { redirect: false });
        console.log(result);
      }}
      type="button"
      {...props}
    >
      <Image
        src="/icons/google.svg"
        width={20}
        height={20}
        alt="google"
        className="mr-2"
      />{' '}
      {text} With Google
    </Button>
  );
}
