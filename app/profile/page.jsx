import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import ProfileComp from '@/components/Profile/ProfileComp';
import { userByParam } from '@/lib/user';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/api/auth/signin?callbackUrl=/dashboard');
  }
  const param = session?.user.email;
  const initialData = await userByParam(param);

  return (
    <main>
      <ProfileComp user={initialData} />
    </main>
  );
}
