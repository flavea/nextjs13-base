import { redirect } from 'next/navigation';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import RegisterForm from '../_components/register';
import { getServerSession } from 'next-auth/next';

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <RegisterForm />;
}
