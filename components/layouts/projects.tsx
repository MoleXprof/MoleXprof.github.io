import Head from "next/head";
import Header from "../header";
import { useRouter } from "next/router";
import ImageCard from "../imageCard";
import Hero from "../hero";
import Footer from "../footer";

const ProjectsLayout = () => {
    const router = useRouter();
    const domain = router.route.split("/");

    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>Projects | Kyle Chin</title>
                <meta name="title" content="Projects | Kyle Chin" />
                <meta name="description" content="Kyle Chin's projects" />
                <link rel="shortcut icon" href="/images/web-icon-circle.png" />
            </Head>
            <Header currentTab={domain[1]} />
            <Hero
                title="Projects"
                backgroundTitle="Recent Projects"
                titleClassName="text-pink-500"
                backgroundColour="bg-pink-500"
            />
            <div className="mt-24 mx-10 md:mx-20 grid gap-y-5 md:gap-y-0 md:grid-cols-2 mb-20 gap-x-5 md:gap-x-10">
                <ImageCard
                    image='/images/krew.png'
                    text='Krew Home Inspectors'
                    description="Website developed collaboratively with two of my friends. I worked strongly on the front-end of the website and used Next.js and TailwindCSS to create a simplistic website."
                    link="https://www.krewhomeinspectors.ca/"
                    subheader="Home inspection booking"
                />

                <ImageCard
                    image='/images/narwhal.jpg'
                    text='NarwhalTypist'
                    description="Type racing game (in progress)"
                    subheader="Game"
                />
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectsLayout