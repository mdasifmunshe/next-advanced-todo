import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import ProfileComp from '@/components/Profile/ProfileComp';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/api/auth/signin?callbackUrl=/dashboard');
  }
  return (
    <main>
      <ProfileComp user={session?.user} />
    </main>
  );
}
