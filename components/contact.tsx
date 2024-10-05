import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-8 text-center items-center pt-5 md:pt-10 pb-24 md:pb-32" id="contact">
            <div>
                <h3 className="text-2xl md:text-5xl font-semibold">
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
        </div>
    );
};

export default Contact;
