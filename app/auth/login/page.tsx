import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LoginForm from '../_components/login';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <LoginForm />;
}
