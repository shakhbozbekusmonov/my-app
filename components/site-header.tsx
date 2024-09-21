'use client';

import { Button } from '@/components/ui/button';
import { UserProfile } from '@/components/user-profile';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SiteHeader = () => {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <header className="bg-white shadow-md py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Site Header</h1>

          {session ? (
            <UserProfile />
          ) : (
            <Button onClick={() => router.push('/auth/login')}>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
