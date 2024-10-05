import Image from "next/image";

const Education = () => {
    return (
        <div className="py-16 md:py-24" id="education">
            {/* mobile view */}
            <div className="md:hidden flex items-start gap-1">
                <Image
                    src={"/images/carleton.jpg"}
                    alt={"Carleton University Logo"}
                    width={25}
                    height={25}
                    className="rounded-full mt-2"
                />

                <div>
                    <h3 className="text-sm font-bold">
                        {"Carleton University"}
                    </h3>

                    <p className="text-xs font-semibold">
                        {"Bacherlor of Computer Science: Soft Eng."}
                    </p>

                    <p className="text-xs text-text-body italic">
                        {"SEP 2020 - PRESENT"}
                    </p>
                    <p className="text-text-body text-xs">
                        {"CGPA: 10.60/12"}
                    </p>
                </div>
            </div>

            {/* desktop view */}
            <div className="hidden md:flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">
                        {"Carleton University"}
                    </h3>
                    <p className="text-text-body text-sm italic">
                        {"SEP 2020 - PRESENT"}
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className="text-right">
                        <h3 className="text-lg font-semibold">
                            {"Bacherlor of Computer Science: Software Engineering Stream"}
                        </h3>
                        <p className="text-text-body text-sm">
                            {"CGPA: 10.60/12"}
                        </p>
                    </div>

                    <Image
                        src={"/images/carleton.jpg"}
                        alt={"Carleton University Logo"}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;