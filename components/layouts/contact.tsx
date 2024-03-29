import Head from "next/head";
import Header from "../header";
import { useRouter } from "next/router";
import Footer from "../footer";
import Hero from "../hero";
import ContactInfo from "../contactInfo";

const ContactLayout = () => {
  const router = useRouter();
  const domain = router.route.split("/");

  return (
    <div className="bg-gray-50 min-h-screen">
        <Head>
          <title>Contact | Kyle Chin</title>
          <meta name="title" content="Contact | Kyle Chin" />
          <meta name="description" content="Methods of contacting Kyle Chin" />
          <link rel="shortcut icon" href="/images/web-icon-circle.png" />
        </Head>
        <Header currentTab={domain[1]} />
        <Hero
          title="What's Next?"
          titleClassName="text-purple-700"
          backgroundTitle="What's Next?"
          subTitle="I am currently looking for my fifth co-op placement for summer of 2024."
        />
        <div className="md:mt-44 md:mx-20 mx-10 divide-y">
          <ContactInfo
            title="Get in touch"
            subtitle="Feel free to reach out to me!"
            colour="bg-purple-700"
            contact={
              <div>
                <p className="md:text-2xl text-lg hidden md:block">
                  Phone Number
                </p>
                <p className="md:text-2xl text-lg md:hidden">Phone #</p>
                <p className="text-sm md:text-md">(613)-581-3076</p>
              </div>
            }
            contactOther={
              <div>
                <p className="md:text-2xl text-lg">Email</p>
                <a href="mailto:kkhc99@gmail.com" className="hyperlink text-sm md:text-md">
                  kkhc99@gmail.com
                </a>
              </div>
            }
          />
          <ContactInfo
            title="View socials"
            colour="bg-purple-700"
            contact={
              <div>
                <p className="md:text-2xl text-lg">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/kyle-chin-527959231/"
                  className="hyperlink text-sm md:text-md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kyle Chin
                </a>
              </div>
            }
            contactOther={
              <div>
                <p className="md:text-2xl text-lg">GitHub</p>
                <a
                  href="https://github.com/MoleXprof"
                  className="hyperlink text-sm md:text-md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kyle Chin
                </a>
              </div>
            }
          />
        </div>
        <Footer/>
      </div>
  );
};

export default ContactLayout;
