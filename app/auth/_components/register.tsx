'use client';

import Link from 'next/link';

import Input from '@/design/Input';
import Button from '@/design/Button';
import Password from '@/design/Password';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './validation';

type RegisterFormType = {
  email: string;
  password: string;
  confirm: string;
  name: string;
};

export default function RegisterForm() {
  const formOptions = { resolver: yupResolver(registerSchema) };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>(formOptions);

  const onSubmit = async (data: RegisterFormType) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              placeholder="Full Name"
              type="string"
              kind="gray"
              {...field}
              error={errors.name?.message}
            />
          )}
        />
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
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Password
              placeholder="Password"
              kind="gray"
              {...field}
              error={errors.password?.message}
            />
          )}
        />
        <Controller
          name="confirm"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Password
              placeholder="Re-type Password"
              kind="gray"
              {...field}
              error={errors.confirm?.message}
            />
          )}
        />
        <p className="mb-3 text-center">
          By signing up, you agree to our{' '}
          <Link href="/" className="font-bold">
            Privacy Policy
          </Link>
          .
        </p>
        <Button className="w-full" kind="success" type="submit">
          Sign Up
        </Button>
        <p className="mt-3 text-center">
          Already have an account? <Link href="/auth/login">Log in</Link>
        </p>
      </form>
    </>
  );
}
