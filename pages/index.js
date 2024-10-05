import Head from "next/head";
import About from "../../kylechin-website/components/about";
import Header from "../../kylechin-website/components/header";
import Hero from "../../kylechin-website/components/hero";
import Footer from "../../kylechin-website/components/footer";
import Education from "../../kylechin-website/components/education";
import Contact from "../../kylechin-website/components/contact";
import Projects from "../../kylechin-website/components/projects";
import Experience from "../../kylechin-website/components/experience";


const Index = () => {
  return (
    <div className="lg:px-48 px-10 bg-background-default text-text-default w-full h-min-screen !scroll-smooth">
        <Head>
            <title>Kyle Chin</title>
            <meta name="title" content="Kyle Chin" />
            <meta
                name="description"
                content="Portfolio website of Kyle Chin"
            />
            {/* get a better logo */}
            <link rel="shortcut icon" href="/images/web-icon-circle.png" />
        </Head>

        <Header />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
};

export default Index;
