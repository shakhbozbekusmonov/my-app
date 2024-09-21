'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (session) {
    router.push('/');
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>

        <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
