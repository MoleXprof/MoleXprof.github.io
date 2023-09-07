import { useState } from "react";
import { classnames } from "../utils";
import { headerOptions } from "./constants/constants";
import Image from "next/image";
import { saveAs } from "file-saver";

type HeaderProps = {
  currentTab: string;
};

const Header = ({ currentTab }: HeaderProps) => {
  const [toggle, setToggle] = useState(false);

  const saveResume = () => {
    saveAs(
      "https://molexprof.github.io/resume.pdf",
      "kyle_resume.pdf"
    )
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="ml-5 md:ml-10 bg-gray-300 py-2.5 font-bold px-5 rounded-md hover:bg-gray-200">
        <button className="download-btn" onClick={saveResume}>
          Resume
        </button>
      </div>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {headerOptions.map(
          (nav, index) =>
            nav.display && (
              <li
                key={index}
                className={classnames(
                  nav.title.toLowerCase() === currentTab.toLowerCase() ||
                    (currentTab == "" && nav.title == "About Me")
                    ? "font-bold"
                    : "font-normal",
                  "cursor-pointer text-base text-black ${index === headerOptions.length - 1 ? 'mr-0' : 'mr-10'} mr-10"
                )}
              >
                <a href={nav.href}>{nav.title}</a>
              </li>
            )
        )}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? "/images/close.png" : "/images/menu.png"}
          alt="menu"
          className="w-7 h-7 mr-4 object-contain"
          width={100}
          height={100}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={classnames(
            toggle ? "flex" : "hidden",
            `p-6 bg-gradient-to-r from-gray-200 to-gray-200 absolute top-16 right-0 mx-4 my-2 sidebar min-w-36`
          )}
        >
          <ul className="list-none flex flex-col justify-start items-end">
            {headerOptions.map(
              (option, index) =>
                option.display && (
                  <a
                    key={index}
                    href={option.href}
                    className={classnames(
                      option.title.toLowerCase() === currentTab.toLowerCase() ||
                        (currentTab == "" && option.title == "About Me")
                        ? "font-bold"
                        : "font-normal",
                      "hover:bg-gray-100 text-midnight-500 px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {option.title}
                  </a>
                )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
