import { useState } from "react";
import { classnames } from "../utils";
import { headerOptions } from "./constants/constants";
import { saveAs } from "file-saver";
import { PiFileText } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const saveResume = () => {
        saveAs(
            "https://molexprof.github.io/resume.pdf",
            "kyle_chin_resume.pdf"
        )
    }

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar" id="top">
            <div className="border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 
                rounded-md hover:bg-background-hover text-sm md:text-base cursor-pointer"
            >
                <button className="download-btn flex gap-1 justify-center items-center" onClick={saveResume}>
                    <PiFileText />
                    {"Resume"}
                </button>
            </div>
            
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {headerOptions.map((nav, index) =>
                    <li
                        key={index}
                        className={`cursor-pointer text-base hover:font-bold ${index === headerOptions.length - 1 ? 'mr-0' : 'mr-10'}`}
                    >
                        <Link
                            href={nav.href}
                            to={nav.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            {nav.title}
                        </Link>
                    </li>
                )}
            </ul>

            {/* mobile view */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                <div onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <IoMdClose className="w-[20px] h-[20px]" /> : <IoMdMenu className="w-[20px] h-[20px]" />}
                </div>
        
                <div className={classnames(
                    toggle ? "flex" : "hidden", "p-6 absolute top-10 right-0 mx-4 sidebar min-w-36"
                )}>
                    <ul className="list-none flex flex-col justify-end items-end">
                        {headerOptions.map(
                        (nav, index) =>
                            <li key={index} className={"font-semibold hover:font-bold px-1 py-2 text-sm cursor-pointer"}>
                                <Link
                                    href={nav.href}
                                    to={nav.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setToggle((prev) => !prev)}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
