import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";

const SERVER_ERR_MSG = "Something went wrong in a server."

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const authOptions: any = {
        providers: [
            GoogleProvider({
                clientId: "185531830886-iqnpvpqfoqftj4mg8hv5c5k6odd6tb4h.apps.googleusercontent.com",
                clientSecret:"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",
            }),
        ],
        pages: {
            error: "/sss",
            // signIn: '/auth/signin',
            // signOut: '/auth/signout',
        },
        callbacks: {
            // async session({ session }: any) {
            //         return Promise.resolve(session);
            // },
            async signIn({ user }: any) {
                console.log(user);
                try {
                    return Promise.resolve(true);
                } catch (err) {
                    return Promise.reject(new Error(SERVER_ERR_MSG));
                }
            },
        },
    };
    return await NextAuth(req, res, authOptions);
}
