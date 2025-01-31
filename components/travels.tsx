import Image from "next/image";

const Travels = () => {
    return (
        <div className="flex flex-row justify-center gap-5 lg:gap-10 py-5 lg:py-10 autoVerticalScroll relative" id="travels">
            <h3 className="uppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-2xl lg:text-8xl w-full text-center z-10">{"Recent Travels"}</h3>

            <div className="bg-pink-300 mb-2 flex items-center justify-center relative">
                <p className="font-written text-sm lg:text-3xl font-semibold absolute bottom-0 lg:bottom-1 rotate-6 z-10 pr-2 lg:pr-10">{"Kyoto, JP"}</p>
                <Image
                    src={"/images/japan.png"}
                    alt={"Japan"}
                    width={250}
                    height={400}
                    className="rotate-6 transition duration-300 ease-in-out hover:scale-105 shadow-lg"
                />
            </div>

            <div className="bg-pink-300 mb-2 flex items-center justify-center relative">
                <p className="font-written text-sm lg:text-3xl font-semibold absolute bottom-0 lg:bottom-1 -rotate-3 z-10">{"Tokyo, JP"}</p>
                <Image
                    src={"/images/tori.png"}
                    alt={"Tori"}
                    width={250}
                    height={400}
                    className="-rotate-3 transition duration-300 ease-in-out hover:scale-105 shadow-lg"
                />
            </div>
            
            <div className="bg-pink-300 mb-2 flex items-center justify-center relative">
                <p className="font-written text-sm lg:text-3xl font-semibold absolute bottom-0 lg:bottom-1 -rotate-6 z-10 pl-2 lg:pl-5">{"Leiden, NL"}</p>
                <Image
                    src={"/images/netherlands.png"}
                    alt={"Netherlands"}
                    width={250}
                    height={400}
                    className="-rotate-6 transition duration-300 ease-in-out hover:scale-105 shadow-lg"
                />
            </div>
        </div>
    );
};

export default Travels;