type CardProps = {
  right: boolean;
  title: string;
  category: string;
  text: string;
};

const Card = ({ right, title, category, text }: CardProps) => {
  return (
    <div>
      {right ? (
        <div className="md:mx-20 mx-10 mt-8 grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <div className="flex flex-row md:mt-24 mt-10">
              <div className="w-2 h-7 bg-yellow-400" />
              <h4 className="font-light ml-2 text-xl">{category}</h4>
            </div>
            <h3 className="font-bold text-4xl mt-3">{title}</h3>
          </div>
          <p className="my-6 md:my-12 text-md md:text-lg font-light text-right">{text}</p>
        </div>
      ) : (
        <div className="md:mx-20 mx-10 mt-8 grid md:grid-cols-2 grid-cols-1">
          <div className="md:hidden">
            <div>
              <div className="flex flex-row md:mt-24 mt-10">
                <div className="w-2 h-7 bg-yellow-400" />
                <h4 className="font-light ml-2 text-xl">{category}</h4>
              </div>
              <h3 className="font-bold text-4xl mt-3">{title}</h3>
            </div>
            <p className="my-6 md:my-12 text-md md:text-lg font-light text-right">
              {text}
            </p>
          </div>
          <div className="hidden md:block">
            <p className="my-12 text-lg font-light">{text}</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <div className="flex flex-row mt-24 justify-end">
                <h4 className="font-light mr-2 text-xl">{category}</h4>
                <div className="w-2 h-7 bg-yellow-400" />
              </div>
              <h3 className="font-bold text-4xl mt-3">{title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
