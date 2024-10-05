import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-background-default flex justify-between">
      <div className="flex gap-2">
        <a
          href="https://github.com/MoleXprof"
          className="hyperlink text-sm md:text-base"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub className="text-pink-300 h-5 w-5 hover:text-pink-400"/>
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-chin-527959231/"
          className="hyperlink text-sm md:text-base"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-pink-300 h-5 w-5 hover:text-pink-400"/>
        </a>
      </div>

      <div className="text-right text-background-hover pb-1 md:pb-2 font-bold uppercase text-sm md:text-xl">
        {"Built by Kyle Chin"}
      </div>
    </div>
  );
};

export default Footer;
