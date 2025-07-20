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

            <div className="flex gap-4">
                <div className="border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base cursor-pointer">
                    <Link 
                        className="download-btn flex gap-1 justify-center items-center"
                        href={"https://myanimelist.net/profile/MoleXprof"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiMyanimelist className="h-7 w-7" />
                    </Link>
                </div>
                <div className="border border-text-body py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base cursor-pointer">
                    <Link 
                        className="download-btn flex gap-1 justify-center items-center"
                        href={"https://letterboxd.com/Xprof"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLetterboxd className="h-7 w-7" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Films;