/*import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

LINES COMMENTED DUE TO AuthOptions folder being separeted
*/
import NextAuth from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/options";

/*export const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma) as Adapter,
    providers:[
        GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        })
    ]
}*/

const handler = NextAuth(authOptions);

export{handler as GET, handler as POST}
