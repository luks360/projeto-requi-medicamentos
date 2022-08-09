import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
  // Configurar um ou mais provedores de autenticação
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    session: async (session) => {
      // session.name = user.name;
      return Promise.resolve(session);
    },
  },
});