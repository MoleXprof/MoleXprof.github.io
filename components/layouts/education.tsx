import Head from "next/head";
import Header from "../header";
import Image from "next/image";
import { useRouter } from "next/router";
import Hero from "../hero";
import Footer from "../footer";

const EducationLayout = () => {
  const router = useRouter();
  const domain = router.route.split("/");

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Education | Kyle Chin</title>
        <meta name="title" content="Education | Kyle Chin" />
        <meta name="description" content="Current Education of Kyle Chin" />
        <link rel="shortcut icon" href="/images/web-icon-circle.png" />
      </Head>
      <Header currentTab={domain[1]} />
      <div className="grid md:grid-cols-2">
        <div>
          <Hero
            topText="I currently attend"
            title="Carleton University"
            backgroundTitle="Carleton University"
            subTitle="Bachelors of Computer Science: Software Engineering Stream"
            text="CGPA: 10.81/12"
            titleClassName="text-red-600"
            backgroundColour="bg-red-600"
          />
        </div>
        <div>
          <Image
            className="flex ml-48 mt-24 lg:opacity-10 hidden lg:block"
            src="/images/carleton.png"
            alt="Carleton Ravens logo"
            width={350}
            height={350}
          />
        </div>
      </div>
      <div className="md:ml-20 mx-10 md:mt-24 mt-8 text-lg max-w-3xl font-light">
        <p>
          I am in my third year of my Bachelors of Computer Science at Carleton.
          With my co-op program adding an extra year to my studies, I am
          supposed to graduate in April 2025. I take pride in my studies and
          enjoy the many challenges that come with learning different
          programming languages.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:mx-20 mx-10 mt-32">
        <Image
          className="shadow-2xl"
          src="/images/hockey-intramurals.jpg"
          alt="Carleton hockey intramurals champions"
          width={500}
          height={500}
        />
        <div className="md:mt-40 mt-10 mb-72">
          <div>
            <h2 className="text-right font-bold md:text-5xl text-4xl text-gray-100">
              Hockey Intramurals
            </h2>
            <h2 className="text-right -mt-8 font-bold md:text-5xl text-4xl">
              Activities & Clubs
            </h2>
          </div>
          <div className="text-right">
            <p className="text-lg font-light mt-4">
              My friends and I won the Carleton Hockey Intramurals for the fall
              2022 semester.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EducationLayout;
