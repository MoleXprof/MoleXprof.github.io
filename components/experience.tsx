import Image from "next/image";
import Job, { JobType } from "./job";
import { saveAs } from "file-saver";
import { PiFileText } from "react-icons/pi";

const Experience = () => {
    const saveResume = () => {
        saveAs(
            "https://kyle-chin.vercel.app/resume.pdf",
            "Kyle Chin Resume.pdf"
        )
    }

    return (
        <div className="autoVerticalScroll" id="experience">
            <div className="py-4 md:py-8">
                <h2 className="text-2xl md:text-5xl font-bold font-header">
                    {"Experience"}
                </h2>
                <div className="flex items-center gap-1 md:gap-2">
                    <p className="text-text-body text-sm md:text-xl">
                        {"A list of previous and current jobs."}
                    </p>
                    <div className="border border-pink-300 flex-grow" />
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-0">
                <div>
                    <div className="flex gap-2 md:gap-4 items-center">
                        <Image
                            src={"/images/wbd.jpeg"}
                            alt={`WBD logo`}
                            width={50}
                            height={50}
                            className="hidden md:flex rounded-full"
                        />

                        <Image
                            src={"/images/rossvideo.png"}
                            alt={`WBD logo`}
                            width={25}
                            height={25}
                            className="md:hidden rounded-full"
                        />

                        <h3 className="text-lg md:text-2xl font-semibold">
                            {"Warner Bros. Discovery"}
                        </h3>
                    </div>

                    <Job
                        title="Software Developer I"
                        date="MAY 2025 - Present"
                        tools={["C++"]}
                        type={JobType.FullTime}
                        line={false}
                    />
                </div>
                
                <div>
                    <div className="flex gap-2 md:gap-4 items-center">
                        <Image
                            src={"/images/rossvideo.png"}
                            alt={`RossVideo logo`}
                            width={50}
                            height={50}
                            className="hidden md:flex rounded-full"
                        />

                        <Image
                            src={"/images/rossvideo.png"}
                            alt={`RossVideo logo`}
                            width={25}
                            height={25}
                            className="md:hidden rounded-full"
                        />

                        <h3 className="text-lg md:text-2xl font-semibold">
                            {"RossVideo"}
                        </h3>
                    </div>

                    <Job
                        title="Front-end Web Developer"
                        date="SEP 2024 - DEC 2024"
                        tools={["React.js", "Redux.js", "Protobuf", "TailwindCSS"]}
                        type={JobType.PartTime}
                    />

                    <Job
                        title="Full Stack Developer"
                        date="JAN - AUG 2024"
                        tools={["React.js", "Redux.js", "Protobuf", "C++"]}
                        type={JobType.Coop}
                    />

                    <Job
                        title="Test Automation Developer"
                        date="MAY - AUG 2023"
                        tools={["Cucumber", "Java", "Gherkins"]}
                        type={JobType.Coop}
                        line={false}
                    />
                </div>

                <div>
                    <div className="flex gap-2 md:gap-4 items-center">
                        <Image
                            src={"/images/tutorocean.png"}
                            alt={`TutorOcean logo`}
                            width={50}
                            height={50}
                            className="hidden md:flex rounded-full"
                        />

                        <Image
                            src={"/images/tutorocean.png"}
                            alt={`TutorOcean logo`}
                            width={25}
                            height={25}
                            className="md:hidden rounded-full"
                        />

                        <h3 className="text-lg md:text-2xl font-semibold">
                            {"TutorOcean"}
                        </h3>
                    </div>

                    <Job
                        title="Front-end Web Developer"
                        date="SEP - DEC 2022"
                        tools={["Next.js", "TailwindCSS", "MongoDB"]}
                        type={JobType.Coop}
                    />

                    <Job
                        title="Test Automation and Mobile App Developer"
                        date="MAY - AUG 2022"
                        tools={["Appium", "Selenium", "SwiftUI", "Kotlin"]}
                        type={JobType.Coop}
                        line={false}
                    />
                </div>
            </div>

            <div className="flex justify-between items-center py-10 autoAppear">
                <div>
                    <h3 className="text-sm md:text-lg font-semibold">
                        {"To learn more"}
                    </h3>
                    <p className="text-text-body text-xs md:text-sm">
                        {"Check out my resume."}
                    </p>
                </div>

                <div className="border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base cursor-pointer">
                    <button className="download-btn flex gap-1 justify-center items-center" onClick={saveResume}>
                        <PiFileText />
                        {"Resume"}
                </button>
                </div>
            </div>
        </div>
    );
};

export default Experience;