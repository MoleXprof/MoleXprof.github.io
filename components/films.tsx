import Link from "next/link";
import { SiMyanimelist } from "react-icons/si";
import { FaLetterboxd } from "react-icons/fa6";

const Films = () => {
    return (
        <div className="flex justify-between items-center py-10 autoAppear">
            <div>
                <h3 className="text-sm md:text-lg font-semibold">
                    {"Want to see what I've been watching?"}
                </h3>
                <p className="text-text-body text-xs md:text-sm">
                    {"Check out my MAL and Letterboxd profiles."}
                </p>
            </div>

            <div className="flex gap-1 md:gap-4">
                <Link
                    className="download-btn flex gap-1 justify-center items-center border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:bg-background-hover cursor-pointer"
                    href={"https://myanimelist.net/profile/MoleXprof"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiMyanimelist className="h-[18px] md:h-7 w-4 md:w-7" />
                </Link>

                <Link 
                    className="download-btn flex gap-1 justify-center items-center border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:bg-background-hover cursor-pointer"
                    href={"https://letterboxd.com/Xprof"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLetterboxd className="h-[18px] md:h-7 w-4 md:w-7" />
                </Link>
            </div>
        </div>
    );
};

export default Films;