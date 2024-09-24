'use client';

import { useAuth, UserButton } from '@clerk/nextjs';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button'

const SiteHeader = () => {
  const { data: session } = useSession();

  const { isSignedIn } = useAuth();

  const router = useRouter();

  return (
    <header className="bg-white py-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Site Header</h1>

          {/* {session ? (
            <UserProfile />
          ) : (
            <Button onClick={() => router.push('/auth/login')}>Login</Button>
          )} */}

          {isSignedIn ? (
            <UserButton />
          ) : (
            <Button onClick={() => router.push('/auth/login')}>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
