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
                async signIn({ user }: any) {
                    try {
                        // const res = await fetch(
                        //     "https://test.esimplified.io/customer/esimpalace/api/customer_sign_in/",
                        //     {
                        //         method: "POST",
                        //         headers: {
                        //             "Content-Type": "application/json",
                        //             Authorization: token,
                        //         },
                        //         body: JSON.stringify({
                        //             customer_id,
                        //             password,
                        //         }),
                        //     }
                        // );
                        // const response = await res.json();
                        console.log(user);
                        return Promise.resolve(true);
                    } catch (err) {
                        return Promise.reject(new Error(SERVER_ERR_MSG));
                    }
                },
            },
        };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };