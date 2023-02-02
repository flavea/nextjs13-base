'use client';

import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '@/design/Input';
import Button from '@/design/Button';
import GoogleButton from '@/design/GoogleButton';
import Password from '@/design/Password';

import { loginSchema } from './validation';

type LoginFormType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const formOptions = { resolver: yupResolver(loginSchema) };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>(formOptions);

  const onSubmit = async (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <>
      <GoogleButton />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              placeholder="Email"
              type="email"
              kind="gray"
              {...field}
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <Password
              placeholder="Password"
              kind="gray"
              {...field}
              error={errors.password?.message}
            />
          )}
        />
        <Button className="w-full" type="submit" kind="success">
          Login
        </Button>
      </form>
      <div className="mt-3 text-center">
        <Link href="/auth/register" className="w-full">
          Lupa Password?
        </Link>
        <p className="mt-1">
          Tidak punya akun?{' '}
          <Link href="/auth/register" className="w-full ">
            Daftar
          </Link>
        </p>
      </div>
    </>
  );
}
