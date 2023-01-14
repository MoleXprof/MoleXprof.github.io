import { classnames } from "../utils";

type HeroProps = {
  topText?: string;
  title: string;
  subTitle?: string;
  text?: string;
  titleClassName: string;
  backgroundColour?: string;
  backgroundTitle: string;
};

const uni = "Carleton University";

const Hero = ({
  backgroundColour,
  backgroundTitle,
  topText,
  title,
  subTitle,
  text,
  titleClassName,
}: HeroProps) => {
  return (
    <div className="md:ml-20 text-midnight-500">
      <p className="mt-24 text-lg md:text-2xl font-light mx-10 md:mx-0">
        {topText}
      </p>
      <h2 className="font-bold text-6xl md:text-6xl text-gray-100 ml-10 md:mx-0">
        {backgroundTitle}
      </h2>
      <div
        className={classnames(
          title === "Carleton University" ? "md:-mt-12 -mt-24" : "-mt-10"
        )}
      >
        <h1
          className={classnames(
            titleClassName,
            "font-bold text-6xl md:text-7xl ml-10 md:mx-0"
          )}
        >
          {title}
        </h1>
      </div>
      <p className="md:mt-4 mt-3 md:text-3xl text-2xl mx-10 md:mx-0">
        {subTitle}
      </p>
      {text && (
        <p className="md:mt-12 mt-8 md:text-xl text-lg max-w-2xl font-light mx-10 md:mx-0">
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
  );
};

export default Hero;
