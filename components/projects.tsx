import ImageCard from "./imageCard";

const Projects = () => {
    return (
        <div className="py-5 md:py-10" id="projects">
            <h2 className="text-2xl md:text-5xl font-bold font-header">
                {"Works"}
            </h2>

            <div className="flex items-center gap-1 md:gap-2">
                <p className="text-text-body text-sm md:text-xl">
                {"A selection of recent projects."}
                </p>
                <div className="border border-pink-300 flex-grow" />
            </div>

            <div className="py-5 grid gap-y-5 md:gap-y-0 md:grid-cols-2 gap-x-5">
                <ImageCard
                    image='/images/krew.png'
                    text='Krew Home Inspectors'
                    description="A booking website developed with two of my friends."
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
	    </div>
    );
};

export default Projects;