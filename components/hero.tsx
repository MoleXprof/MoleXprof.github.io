import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-[6rem] md:pt-[12rem] md:pb-[14rem] pb-[10rem] relative">
        {/* <div className="absolute filter blur-xl">
        <div className="absolute top-0 md:left-36 left-28 lg:w-72 w-48 lg:h-72 h-48 bg-bubbles-medium rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute top-0 md:left-72 left-12 lg:w-72 w-48 lg:h-72 h-48 bg-bubbles-large rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 md:left-20 left-4 lg:w-72 w-48 lg:h-72 h-48 bg-bubbles-small rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-5000"></div>
        </div> */}

        <div className="flex flex-col justify-center items-center gap-4 z-10">
            <Image
                src={"/images/headshot.png"}
                alt={"Kyle Chin headshot photo"}
                width={100}
                height={100}
                className={"rounded-full shadow-xl"}
            />

            <div className="flex flex-col justify-center items-center">
                <div className="relative">
                    <h1 className="absolute font-bold text-4xl md:text-8xl text-pink-300 font-header">
                        {"Kyle Chin"}
                    </h1>

                    <h2 className="font-bold text-4xl md:text-8xl text-pink-200 font-header pl-0.5 md:pl-2">
                        {"Kyle Chin"}
                    </h2>
                </div>

                <div className="flex text-xl md:text-3xl gap-2 pt-3 md:pt-2 pb-2 md:pb-4 font-code">
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Student', 'Bouldering Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p className="w-3/4 md:w-1/2 text-center text-text-body text-sm md:text-xl">
                    {"An ethusiatic programmer that is passionate about front-end web designs and is looking to further my technical skills."}
                </p>
            </div>
        </div>

        <div className="absolute text-text-body text-xs md:text-base left-[2rem] bottom-0 md:left-[3rem] font-written">
            <p className="rotate-[340deg]">{"Psst...scroll down!"}</p>
            <div className="rotate-90 mt-10">
                <span aria-hidden="true" className="h-full font-bold"> &rarr;</span>
            </div>
        </div>
  </div>
  );  
};

export default Hero;
