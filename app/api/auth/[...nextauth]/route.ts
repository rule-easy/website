import { AuthResponse, SigninRequest } from "@/lib/dto/auth";
import { SignIn } from "@/lib/services/auth";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null;
                console.log("Trying authentication:", credentials)
                try {
                    var signinReq: SigninRequest = { email: credentials?.email, password: credentials?.password }
                    const authResponse: AuthResponse = await SignIn(signinReq)
                    console.log("Successful authentication:", authResponse)
                    return authResponse.success?.data
                } catch (e) {
                    console.log("Unsuccessful authentication")
                    return null
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            console.log("Caching the session:", session)
            return session;
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }