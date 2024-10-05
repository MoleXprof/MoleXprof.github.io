import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-[6rem] md:pt-[12rem] md:pb-[20rem] pb-[10rem]">
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
                className={"rounded-full"}
            />

            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl md:text-8xl text-pink-300">{"Kyle Chin"}</h1>

                <div className="flex text-xl md:text-3xl gap-2 pt-3 md:pt-2 pb-2 md:pb-4">
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
  </div>
  );  
};

export default Hero;
