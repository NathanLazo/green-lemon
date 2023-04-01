import type { NextPage } from "next";
import Head from "next/head";
import DashboardComponent from "@components/dashboard";

// NEXT AUTH
import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";

const Dashboard: NextPage = () => {

    const session = useSession();


    return (
        <>
            <Head>
                <title>Green Lemon</title>
            </Head>

            <DashboardComponent />
        </>
    )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);
    if (!session?.user.isAdmin) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    return {
        props: { session },
    };
};