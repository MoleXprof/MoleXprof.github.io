import Head from "next/head";
import Header from "../header";
import { otherJobs } from "../constants/constants";
import { useRouter } from "next/router";
import SubHeader from "../subHeader";
import Hero from "../hero";
import CircularProgress from "../circularProgress";
import Footer from "../footer";
import JobText from "../jobText";

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
      <Hero
        topText="2024/01 - 2024/04"
        title="RossVideo"
        backgroundTitle="RossVideo"
        subTitle="Co-op Experience"
        titleClassName="bg-red-600 inline-block text-transparent bg-clip-text"
        backgroundColour="bg-red-600"
      />
      <div className="mt-16 mb-48">
        <JobText
          right={false}
          title="Software Developer - C++"
          description="Working on a new UI with a React frontend and a C++ backend. Utilizing protobuf to transmit data from the backend to the frontend"
        />
      </div>
      <Hero
        topText="2023/05 - 2023/08"
        title="RossVideo"
        backgroundTitle="RossVideo"
        subTitle="Co-op Experience"
        titleClassName="bg-red-600 inline-block text-transparent bg-clip-text"
        backgroundColour="bg-red-600"
        flip
      />
      <div className="mt-16 mb-48">
        <JobText
          right
          title="Test Automation Developer"
          description="I developed and maintained API and UI test cases. I also helped create a new framework that applies OOP Principles."
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
      <div className="mt-16">
        <JobText
          right={false}
          title="Front-end Web Developer - QuadC"
          date="2022/09 - 2022/12"
          description=
          {<div>
            I developed and fixed small front-end components based on the requests from renowned international institutions to keep them happy and loyal. Furthermore, I constructed new statically generated pages for the B2C website to help improve SEO results to attract x10 more the potential individuals globally. Here are the following results
            (click <a className="hyperlink" href="https://tutorocean.com/topics" target="_blank" rel="noreferrer"> here </a> to view page and check out the related topics pages that I also worked on):
          </div>}
        />
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
          description={
            <div>
              I developed small front-end services for the Android and iOS TutorOcean mobile application to enhance UI quality. As well, I resolved minor bugs and issues on the iOS applications with SwiftUI to improve the overall user experience for customers
              (click <a className="hyperlink" href="https://apps.apple.com/ca/app/tutorocean/id1480876532" target="_blank" rel="noreferrer">here</a> to view the iOS Tutor Ocean App).
            </div>
          }
        />
      </div>
      <SubHeader
        title="Other Experiences"
        backgroundTitle="Other Experiences"
        colour="bg-cyan-500"
        right
      />
      <div className="md:flex flex-row md:mx-20 mx-10 md:my-24 my-12 hidden">
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
          <div className="mt-6" key={index}>
            <p className="text-lg md:text-2xl">{job.employer}</p>
            <p className="text-2xl md:text-4xl font-bold">{job.position}</p>
            <p className="text-md md:text-lg font-light">{job.date}</p>
            {index != 3 && <div className="h-0.5 w-24 bg-cyan-500 mt-6" />}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ExperienceLayout;
