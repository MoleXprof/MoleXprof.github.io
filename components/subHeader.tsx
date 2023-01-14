import { classnames } from "../utils";
import Link from "next/link";

type SubHeaderProps = {
  title: string;
  backgroundTitle: string;
  colour: string;
  right?: boolean;
};

const SubHeader = ({
  colour,
  title,
  backgroundTitle,
  right,
}: SubHeaderProps) => {
  return (
    <div className="md:mx-20 mx-10">
      <h2
        className={classnames(
          right ? "text-right mr-6" : "text-left ml-6",
          "mt-56 font-bold md:text-5xl text-4xl text-gray-100"
        )}
      >
        {backgroundTitle}
      </h2>
      <h2
        className={classnames(
          right ? "text-right md:-ml-40 -ml-20" : "text-left",
          "md:-mt-8 -mt-5 pb-2 font-bold md:text-5xl text-4xl absolute w-full"
        )}
      >
        {title}
      </h2>
      <div className={classnames(colour, "mt-6 h-0.5")} />
    </div>
  );
};

export default SubHeader;
