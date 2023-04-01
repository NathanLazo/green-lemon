import type { NextPage } from "next";
import Head from "next/head";
import LoginComponent from "@components/login";

// NEXT AUTH
import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Green Lemon</title>
            </Head>
            <LoginComponent />
        </>
    )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);
    if (session?.user.isAdmin) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        }
    }
    return {
        props: { session },
    };
};