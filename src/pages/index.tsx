import { type NextPage } from "next";
import Head from "next/head";
import HeroComponent from "@components/home/hero";
import AboutComponent from "@components/home/about";
import FAQComponent from "@components/home/faq";
import MoreInfoComponent from "@components/home/more";
import Footer from "@components/footer";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Home: NextPage = () => {
  // const { data: session } = useSession();

  useEffect(() => {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          new Notification("Bienvenido a Green Lemon", {
            body: "Nuestra empresa es la opción perfecta para aquellos amantes de los sabores auténticos y la alta calidad gastronómica.",
            icon: "/favicon.ico",
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Green Lemon</title>
        <meta name="description" content="Nuestra empresa es la opción perfecta para aquellos amantes de los
                                        sabores auténticos y la alta calidad gastronómica." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroComponent />
      <AboutComponent />
      <MoreInfoComponent />
      <FAQComponent />
      <Footer />
    </>
  );
};

export default Home;


