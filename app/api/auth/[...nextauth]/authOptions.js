import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/lib/prisma';
import { redirect } from "next/navigation";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "asif@gmail.com" },
              password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              const user = { id: "1", name: "Asif", email: "asds@g.com", password: "asif" };
        
              if (credentials.email === user.email && credentials.password === user.password) {
                // Any object returned will be saved in `user` property of the JWT
                return user;
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
              }
            }
          })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
  }