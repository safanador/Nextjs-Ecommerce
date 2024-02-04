import {prisma} from '@/lib/db/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { env } from "@/lib/env";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  //secret: process.env.NEXTAUTH_SECRET,
}

export default authOptions;