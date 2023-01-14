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
    <div className="bg-gray-50">
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
        subTitle="I am currently looking for my second co-op placement for the summer of 2023."
      />
      <div className="mt-44 md:mx-20 mx-10 divide-y">
        <ContactInfo
          title="Get in touch"
          subtitle="Feel free to reach out to me!"
          colour="bg-purple-700"
          contact={
            <div>
              <p className="md:text-2xl text-xl hidden md:block">
                Phone Number
              </p>
              <p className="md:text-2xl text-xl md:hidden">Phone #</p>
              <p>(613)-581-3076</p>
            </div>
          }
          contactOther={
            <div>
              <p className="md:text-2xl text-xl">Email</p>
              <a href="mailto:kkhc99@gmail.com" className="hyperlink">
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
              <p className="md:text-2xl text-xl">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/kyle-chin-527959231/"
                className="hyperlink"
                target="_blank"
                rel="noreferrer"
              >
                Kyle Chin
              </a>
            </div>
          }
          contactOther={
            <div>
              <p className="md:text-2xl text-xl">GitHub</p>
              <a
                href="https://github.com/MoleXprof"
                className="hyperlink"
                target="_blank"
                rel="noreferrer"
              >
                Kyle Chin
              </a>
            </div>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactLayout;
