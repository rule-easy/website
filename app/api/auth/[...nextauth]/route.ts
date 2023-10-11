import { AuthResponse } from "@/src/dto/auth";
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
                console.log("Trying authentication:", credentials)
                // Add logic here to look up the user from the credentials supplied
                const res = await fetch("http://localhost:8080/v1/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                const user: AuthResponse = await res.json();
                console.log("Successful authentication:", user)
                if (user.data) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user.data;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }