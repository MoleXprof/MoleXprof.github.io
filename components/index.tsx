import Head from "next/head";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";
import Travels from "./travels";
import Films from "./films";

const Home = () => {
    return (
        <div className="lg:px-48 px-10 bg-background-default text-text-default w-full h-min-screen font-subheader">
            <Head>
                <title>{"Kyle Chin"}</title>
                <meta name="title" content="Kyle Chin" />
                <meta
                    name="description"
                    content="Portfolio website of Kyle Chin"
                />
                <link rel="shortcut icon" href="/images/headshot.png" />
            </Head>

            <Header />
            <Hero />
            <About />
            <Films />
            <Travels />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;