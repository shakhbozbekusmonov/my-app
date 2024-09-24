'use client';

import { SignedIn, SignedOut, SignInButton, useAuth } from '@clerk/nextjs';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Login = () => {
  const { data: session } = useSession();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (isSignedIn) {
    router.push('/');
  }

  return (
    <div>
      {/* <div className="flex flex-col gap-4">
          <button
            onClick={() => signIn('google')}
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Sign in with Google
          </button>

          <button
            onClick={() => signIn('github')}
            className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white"
          >
            Sign in with GitHub
          </button>
        </div> */}

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn />
    </div>
  );
};

export default Login;
