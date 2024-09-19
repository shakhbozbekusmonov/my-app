import NextAuth from 'next-auth';

const handler = NextAuth({
  providers: [],

  callbacks: {
    async session({ session }) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user',
  },
});

export { handler as GET, handler as POST };
