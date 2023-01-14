import { classnames } from "../utils";
import { webResults } from "./constants/constants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CicularProgress = () => {
  return (
    <div className="md:flex md:flex-row">
      {webResults.map((result, index) => (
        <div className="md:w-36 w-44 mx-16" key={index}>
          <p
            className={classnames(
              result.className,
              "text-3xl font-bold uppercase mt-10"
            )}
          >
            {result.title}
          </p>
          <CircularProgressbar
            value={result.value}
            text={result.value.toString()}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: `${result.colour}`,
              textColor: `${result.colour}`,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default CicularProgress;
