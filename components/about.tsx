const About = () => {
    return (
        <div className="w-full py-4 md:py-8 flex flex-col gap-10 md:gap-20" id="about">
            <div className="autoVerticalScroll">
                <h2 className="text-2xl md:text-5xl font-bold font-header">
                    {"Hobbies"}
                </h2>
                <div className="flex items-center gap-1 md:gap-2">
                    <p className="text-text-body text-sm md:text-xl">
                        {"How I spend my life."}
                    </p>
                    <div className="border border-pink-300 flex-grow" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 autoRightHorizontalScroll">
                <div className="flex flex-col gap-1 md:hidden">
                    <h2 className="text-2xl font-bold font-header">
                        {"Anime & Manga"}
                    </h2>
                    <div className="flex h-full w-full justify-start">
                        <div className="flex gap-0.5">
                            <div className="border-r border-2 border-pink-300 font-danfo" />
                            <p className="text-text-body text-sm font-danfo">
                                {"Interests"}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="md:w-1/2 text-xs md:text-base text-text-body">
                    {"In my free time, when I'm not playing sports, I enjoy watching anime and reading manga. I grew up watching Pokémon and was later introduced to manga by friends and family. It's become a significant part of my life, as it's something I deeply enjoy whenever I have the chance."}
                </p>

                <div className="md:flex flex-col hidden gap-2 text-right">
                    <h2 className="text-4xl font-bold font-header">
                        {"Anime & Manga"}
                    </h2>
                    <div className="flex h-full w-full justify-end">
                        <div className="flex gap-1.5">
                            <p className="text-text-body text-xl font-danfo">
                                {"Interests"}
                            </p>
                            <div className="border-r border-4 border-pink-300" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 autoLeftHorizontalScroll">
                <div className="flex flex-col gap-1 md:gap-2">
                    <h2 className="text-2xl md:text-4xl font-bold font-header">
                        {"Sports & Fitness"}
                    </h2>
                    <div className="flex h-full w-full justify-start">
                        <div className="flex gap-0.5 md:gap-1.5">
                            <div className="border-r border-2 md:border-4 border-pink-300" />
                            <p className="text-text-body text-sm md:text-xl font-danfo">
                                {"Passions"}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="md:w-1/2 md:text-right text-xs md:text-base text-text-body">
                    {"Since I was a kid, I've always had a passion for sports. I've been playing hockey and soccer for as long as I can remember, and I also enjoy basketball, volleyball, and skiing. During the pandemic, with restrictions in place, I picked up new activities like golf and rock climbing. Recently, I have picked up tennis and pickleball."}
                </p>
            </div>
        </div>
    );
};

export default About;