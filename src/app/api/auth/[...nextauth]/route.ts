import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const SERVER_ERR_MSG = "Something went wrong in a server."
console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
const authOptions: any = {
            providers: [
                GoogleProvider({
                    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
                    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
                }),
            ],
            pages: {
                error: "/",
                signIn: '/auth/signin',
                signOut: '/auth/signout',
            },
            callbacks: {
                // async session({ session }: any) {
                //         return Promise.resolve(session);
                // },
                async signIn({ user }: any) {
                    try {
                        return Promise.resolve(true);
                    } catch (err) {
                        return Promise.reject(new Error(SERVER_ERR_MSG));
                    }
                },
            },
        };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };