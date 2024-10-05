import { Link } from 'react-scroll'
import { IoChevronUpSharp } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-8 text-center items-center pt-5 md:pt-10 pb-24 md:pb-32 relative" id="contact">
            <div>
                <h3 className="text-2xl md:text-5xl font-semibold font-header">
                    {"Get in touch"}
                </h3>
                <p className="text-text-body text-sm md:text-xl">
                    {"Send an email and I'll get back to you asap."}
                </p>
            </div>

            <div className="border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base items-center flex gap-1 cursor-pointer">
                <FaRegPaperPlane />
                <a href="mailto:kkhc99@gmail.com">
                    {"Contact Me"}
                </a>
            </div>

            <div className="absolute rounded-full h-6 w-6 md:h-8 md:w-8 bg-background-hover flex items-center justify-center 
            shadow-lg right-0 bottom-1 hover:font-bold cursor-pointer hover:bg-background-button">
                <Link
                    href={"#top"}
                    to={"top"}
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <IoChevronUpSharp />
                </Link>
            </div>
        </div>
    );
};

export default Contact;
