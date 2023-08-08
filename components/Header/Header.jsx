'use client';

import { useSession } from 'next-auth/react';
import UserModal from '../Popover/UserModal';
import Slider from '@/components/Slider';
import { redirect } from 'next/navigation';

export default function Header() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/dashboard');
    },
  });

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mb-px flex h-16 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <Slider />
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <UserModal user={session?.user} />
          </div>
        </div>
      </div>
    </header>
  );
}
