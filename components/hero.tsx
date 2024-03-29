import { classnames } from "../utils";
import Typewriter from 'typewriter-effect';

type HeroProps = {
  topText?: string;
  title: string;
  subTitle?: string;
  text?: string;
  titleClassName: string;
  backgroundColour?: string;
  backgroundTitle: string;
  flip?: boolean
  typing?: boolean
};

const Hero = ({
  backgroundColour,
  backgroundTitle,
  topText,
  title,
  subTitle,
  text,
  titleClassName,
  flip,
  typing
}: HeroProps) => {
  return (
    <div>
      {flip ? (
        <div className="md:mr-20 text-midnight-500 text-right mr-10">
          <p className="mt-24 text-lg md:text-2xl font-light md:mx-0">
            {topText}
          </p>
          <h2 className="font-bold text-4xl md:text-6xl text-gray-100 ml-10 md:mx-0">
            {backgroundTitle}
          </h2>
          <div
            className={classnames(
              title === "Carleton University" ? "md:-mt-12 -mt-30" : "-mt-10"
            )}
          >
            <h1
              className={classnames(
                titleClassName,
                "font-bold text-5xl md:text-7xl ml-10 md:mx-0"
              )}
            >
              {title}
            </h1>
          </div>
          <p className="md:mt-4 mt-3 md:text-3xl text-xl md:mx-0">
            {subTitle}
          </p>
          {text && (
            <p className="md:mt-12 mt-8 md:text-xl text-lg max-w-2xl font-light mx-10 md:mx-0">
              {text}
            </p>
          )}
          <div className="flex flex-row-reverse">
            <div
              className={classnames(
                backgroundColour,
                "md:h-3 h-2 md:w-20 w-16 mt-3 md:mx-0"
              )}
            />
          </div>
          
        </div>
      ) : (
          <div className="md:ml-20 text-midnight-500">
            <p className="mt-24 text-lg md:text-2xl font-light mx-10 md:mx-0">
              {topText}
            </p>
            <h2 className="font-bold mb-4 text-4xl md:text-6xl text-gray-100 ml-10 md:mx-0">
              {backgroundTitle}
            </h2>
            <div
              className={classnames(
                title === "Carleton University" ? "md:-mt-20 -mt-12" : "-mt-10"
              )}
            >
              <h1
                className={classnames(
                  titleClassName,
                  "font-bold text-5xl md:text-7xl ml-10 md:mx-0"
                )}
              >
                {title}
              </h1>
            </div>
            <div className="flex flex-row">
              <p className="md:mt-4 mt-3 md:text-3xl text-xl mx-10 md:mx-0">
                {subTitle}
              </p>
              {typing ? (
                <div className="text-xl text-black md:mt-4 mt-3 md:text-3xl md:ml-2 -ml-8">
                <Typewriter
                  options={{
                    strings: ['Software Developer', 'Student', 'Bouldering Enthusiast'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              ) : ("")}
            </div>
            {text && (
              <p className="md:mt-12 mt-8 md:text-xl text-md max-w-2xl font-light mx-10 md:mx-0">
                {text}
              </p>
            )}
            <div
              className={classnames(
                backgroundColour,
                "md:h-3 h-2 md:w-20 w-16 mt-3 mx-10 md:mx-0"
              )}
            />
          </div>
      )}
    </div>
  );  
};

export default Hero;
