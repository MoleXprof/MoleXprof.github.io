import Head from "next/head";
import Header from "../header";
import { otherJobs } from "../constants/constants";
import { useRouter } from "next/router";
import SubHeader from "../subHeader";
import Image from "next/image";
import Hero from "../hero";
import CircularProgress from "../circularProgress";
import Footer from "../footer";
import JobText from "../jobText";
import Link from "next/link";

const ExperienceLayout = () => {
  const router = useRouter();
  const domain = router.route.split("/");

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Experience | Kyle Chin</title>
        <meta name="title" content="Experience | Kyle Chin" />
        <meta name="description" content="Current Experience of Kyle Chin" />
        <link rel="shortcut icon" href="/images/web-icon-circle.png" />
      </Head>
      <Header currentTab={domain[1]} />
      <div className="ml-72">
        <Image
          className="absolute ml-96 mt-24 xl:opacity-10 hidden xl:block"
          src="/images/tutorocean.png"
          alt="TutorOcean logo"
          width={350}
          height={350}
        />
      </div>
      <Hero
        topText="2022/05 - 2022/12"
        title="TutorOcean"
        backgroundTitle="TutorOcean"
        subTitle="Co-op Experience"
        titleClassName="bg-gradient-to-t from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text"
        backgroundColour="bg-cyan-500"
      />
      <div className="mt-36">
        <JobText
          right={false}
          title="Front-end Web Developer - QuadC"
          date="2022/09 - 2022/12"
          description="I developed and fixed small front-end components based on the requests from renowned international institutions to keep them happy and loyal. Furthermore, I constructed new statically generated pages for the B2C website to help improve TutorOcean's SEO results to attract x10 more the potential individuals globally. Here are the following results "
        />
      </div>
      <div className="font-light md:ml-20 mx-10 text-lg">
        (click{" "}
        <a className="hyperlink" href="https://tutorocean.com/topics">
          link
        </a>{" "}
        to view page and check out the related topics pages that I also worked
        on):
      </div>
      <div className="flex flex-row py-8 mt-6 justify-center">
        <CircularProgress />
      </div>
      <div className="mt-16">
        <JobText
          right
          title="Test Automation Developer"
          date="2022/05 - 2022/12"
          description="I created and fixed automated regression tests for all TutorOcean platforms (mobile, REST API, and web)."
        />
      </div>
      <div className="mt-36">
        <JobText
          right={false}
          title="Mobile App Developer"
          date="2022/05 - 2022/08"
          description="I developed small front-end services for the Android and iOS TutorOcean mobile application to enhance UI quality. As well, I resolved minor bugs and issues on the iOS applications with SwiftUI to improve the overall user experience for customers."
        />
      </div>
      <SubHeader
        title="Other Experiences"
        backgroundTitle="Other Unrelated Jobs"
        colour="bg-cyan-500"
        right
      />
      <div className="md:ml-20 ml-10">
        <p className="font-light md:text-lg text-md">
          <b className="font-bold">*</b>to go{" "}
          <a
            href="https://www.linkedin.com/in/kyle-chin-527959231/"
            className="hyperlink"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
           to view full resume
        </p>
      </div>
      <div className="flex flex-row md:mx-20 mx-10 md:my-24 my-12 md:flex hidden">
        {otherJobs.map((job, index) => (
          <div className="flex flex-row" key={index}>
            <div className="md:mx-12 mx-6">
              <p className="md:text-2xl text-lg">{job.employer}</p>
              <p className="md:text-4xl text-3xl font-bold">{job.position}</p>
              <p className="md:text-lg text-md font-light">{job.date}</p>
            </div>
            {index != 3 && <div className="h-24 w-0.5 bg-cyan-500" />}
          </div>
        ))}
      </div>
      <div className="mx-10 mt-6 mb-12 md:hidden grid grid-cols-1">
        {otherJobs.map((job, index) => (
          <div className="mt-6">
            <p className="text-2xl">{job.employer}</p>
            <p className="text-4xl font-bold">{job.position}</p>
            <p className="text-lg font-light">{job.date}</p>
            {index != 3 && <div className="h-0.5 w-24 bg-azure-500 mt-6" />}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ExperienceLayout;
