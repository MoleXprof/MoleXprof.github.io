import { FaCircle } from "react-icons/fa";

export enum JobType {
    Coop = "Co-op",
    PartTime = "Part time",
    FullTime = "Full time",
    Intership = "Intership"
}

type JobProps = {
    readonly date: string;
    readonly title: string;
    readonly tools: string[];
    readonly type: JobType;
    readonly line?: boolean;
};

const Job = ({ date, title, tools, type, line = true }: JobProps) => {
  return (
    <div className="pl-1 md:pl-4 py-3 md:py-6 relative">
        <div className="flex gap-4">
            <div className="pt-1 md:pt-2">
                <FaCircle className="text-background-hover" />
                {line ? <div className="absolute h-5/6 border-r border-2 border-background-hover -bottom-[14px] md:-bottom-[26px] left-[10px] md:left-[22px]" /> : null}
            </div>

            <div>
                <h3 className="text-base md:text-xl font-semibold">
                    {title}
                </h3>
                
                <p className="text-xs md:text-base italic text-text-body">
                    {date}
                </p>

                <p className="text-xs md:text-base text-text-body">
                    {type}
                </p>
            
                <div className="flex gap-0.5 md:gap-2 pt-2">
                    {
                        tools.map((tool, index) => {
                            return (
                                <div key={index} className="text-pink-300 border-2 border-pink-300 text-xs md:text-sm px-1 md:px-2 py-0.5 md:py-1 rounded-2xl">
                                    {tool}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Job;
