import prisma from "@/app/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/router";

export const authOptions: AuthOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: "name", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials){
                const user = await prisma.user.findUnique({
                    where: { name: credentials?.name },
                });

                if (!user) throw new Error("user with that name does not exist");

                // ⚠️ WARNING: DO NOT do this in real-world development
                if (user.password !== credentials?.password)
                    throw new Error("incorrect password");

                return user;
            },
        }),
    ],
    debug: process.env.NODE_ENV === "development",
    session: { strategy: "jwt" },
    secret: "secret", // store this in a .env file
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };