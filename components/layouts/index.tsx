import Head from "next/head";
import Header from "../header";
import Image from "next/image";
import { useRouter } from "next/router";
import Hero from "../hero";
import Footer from "../footer";
import ContactBar from "../contactBar";
import Projects from "../projects";

const Home = () => {
  const router = useRouter();
  const domain = router.route.split("/");

  return (
    <div>
      <div className="bg-gray-50">
        <Head>
          <title>About Me | Kyle Chin</title>
          <meta name="title" content="About Me | Kyle Chin" />
          <meta
            name="description"
            content="Interests and Passions of Kyle Chin"
          />
          <link rel="shortcut icon" href="/images/web-icon-circle.png" />
        </Head>
        <Header currentTab={domain[1]} />
        <div className="grid sm:grid-cols-2 min-h-screen">
          <Hero />
          <div className="flex -mt-36 sm:-mt-0">
            <div className="relative filter blur-xl ml-12 sm:mt-32">
              <div className="absolute top-0 md:left-32 lg:left-36 left-28 lg:w-72 w-48 lg:h-72 h-48 bg-blue-200 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
              <div className="absolute top-0 md:left-64 lg:left-72 left-12 lg:w-72 w-48 lg:h-72 h-48 bg-accent-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-24 md:left-12 lg:left-20 left-4 lg:w-72 w-48 lg:h-72 h-48 bg-accent-200 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-5000"></div>
            </div>
            <div className="relative sm:mx-auto mr-10 mt-20 hidden">
              <Image
                className="rounded-xl brightness-105 shadow-lg"
                src="/images/kyle-chin.jpeg"
                alt="Kyle Chin"
                height={550}
                width={350}
              />
            </div>
          </div>
        </div>
        <Projects />
        <ContactBar/>
      </div>
      <Footer />
    </div>
    
  );
};

export default Home;
