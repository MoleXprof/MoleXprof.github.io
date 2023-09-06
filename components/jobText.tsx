import { classnames } from "../utils";

type JobTextProps = {
  right: boolean;
  title: string;
  date: string;
  description: any;
};

const JobText = ({ right, title, date, description }: JobTextProps) => {
  return (
    <div
      className={classnames(
        right ? "text-right md:mr-20 mx-10" : "md:ml-20 mx-10"
      )}
    >
      {right ? (
        <div>
          <h3 className="font-bold md:text-4xl text-3xl">{title}</h3>
          <p className="md:text-xl text-lg font-light">{date}</p>
          <p className="md:text-xl text-md font-light max-w-3xl mt-4 float-right">
            {description}
          </p>
        </div>
      ) : (
        <div className="mt-16">
          <h3 className="font-bold text-4xl">{title}</h3>
          <p className="md:text-xl text-lg font-light">{date}</p>
          <div className="md:text-xl text-md font-light mt-4 max-w-3xl">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobText;
