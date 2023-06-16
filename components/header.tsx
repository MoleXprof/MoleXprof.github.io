import { useState } from "react";
import { classnames } from "../utils";
import { headerOptions } from "./constants/constants";
import Image from "next/image";
import { Link } from 'react-scroll';

type HeaderProps = {
  currentTab: string;
};

const Header = ({ currentTab }: HeaderProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a className="ml-5 sm:ml-10 bg-accent-100 text-white rounded-md px-6 py-2 shadow-lg hover:bg-accent-200 font-medium">
        Resume
      </a>
      <div className="space-x-2 ml-2.5">
          <a
            href="https://www.linkedin.com/in/kyle-chin-527959231/"
            className="text-accent-100 hover:text-accent-200"
          >
            <i className="ri-linkedin-box-fill text-4xl"></i>
          </a>
          <a
            href="https://github.com/MoleXprof"
            className="text-accent-100 hover:text-accent-200 text-4xl"
          >
            <i className="ri-github-fill"></i>
          </a>
        </div>
      {/* monitor view */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {headerOptions.map(
          (nav, index) =>
            nav.display && (
              <li
                key={index}
                className={classnames(
                  nav.title.toLowerCase() === currentTab.toLowerCase()
                    ? "font-bold"
                    : "font-normal",
                  "cursor-pointer text-base text-black ${index === headerOptions.length - 1 ? 'mr-0' : 'mr-10'} mr-10 hover:text-accent-200 hover:font-semibold"
                )}
              >
                <Link
                  href={nav.href}
                  key={nav.title}
                  to={nav.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {nav.title}
                </Link>
              </li>
            )
        )}
      </ul>

      {/* mobile view */}
      <div className="md:hidden flex flex-1 justify-end items-center z-10">
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
            `p-6 bg-gray-200 absolute top-16 right-0 mx-4 my-2 sidebar min-w-36`
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
                      "hover:bg-gray-100 text-midnight-500 px-3 py-2 text-sm font-medium hover:text-accent-200 hover:rounded-md"
                    )}
                  >
                    <Link
                      href={option.href}
                      key={option.title}
                      to={option.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {option.title}
                    </Link>
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
