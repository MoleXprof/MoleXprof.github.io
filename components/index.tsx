import Head from "next/head";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";

const Home = () => {
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

export default Home;