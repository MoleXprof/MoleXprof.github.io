const About = () => {
    return (
        <div className="w-full py-4 md:py-8 flex flex-col gap-10 md:gap-20" id="aboutme">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0">
                <div className="flex flex-col gap-1 md:gap-2">
                    <h2 className="text-2xl md:text-5xl font-bold font-header">
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
                    {"Ever since I was young, I've always loved playing sports. I have played hockey and soccer for as long as I can remember. I also love playing basketball, volleyball, and skiing. Due to the restrictions of the pandemic, I got into other sports such as golf and rock climbing."}
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0">
                <div className="flex flex-col gap-1 md:hidden">
                    <h2 className="text-2xl font-bold font-header">
                        {"Anime & Manga"}
                    </h2>
                    <div className="flex h-full w-full justify-start">
                        <div className="flex gap-0.5">
                            <div className="border-r border-2 border-pink-300 font-danfo" />
                            <p className="text-text-body text-sm">
                                {"Interests"}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="md:w-1/2 text-xs md:text-base text-text-body">
                    {"On my spare time, when I'm not playing sports, I'm watching anime and reading manga. I grew up watching the Pokémon and was later introduced to manga by friends and family members. It has become a big aspect of my life, since it is an something I thoroughly enjoy whenever I get free time."}
                </p>

                <div className="md:flex flex-col hidden gap-2 text-right">
                    <h2 className="text-5xl font-bold font-header">
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
        </div>
    );
};

export default About;