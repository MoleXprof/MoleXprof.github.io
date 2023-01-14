import Image from "next/image";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { classnames } from "../utils";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

type Images = {
  className?: string;
  image: string;
  name: string;
};

type CarouselProps = {
  className?: string;
  images: Images[];
  title?: string;
};

export const ImageCarousel = ({ className, images, title }: CarouselProps) => {
  return (
    <div className={classnames("pt-10", className)}>
      {title && (
        <h2 className="mx-auto max-w-prose font-bold text-center text-2xl uppercase text-midnight-500">
          {title}
        </h2>
      )}
      <div className="pointer-events-none mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <Carousel
          ssr
          autoPlay
          infinite
          deviceType="tablet"
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          keyBoardControl={false}
          responsive={responsive}
        >
          {images.map((item, index) => (
            <div key={index} className="pointer-events-none">
              <div className={classnames("h-80 w-80 px-2", item.className)}>
                <Image
                  className="object-contain object-center ml-16 md:ml-12 h-full w-full"
                  src={item.image}
                  alt={item.name}
                  priority={index < 4}
                  height={250}
                  width={250}
                />
              </div>
              <div className="flex flex-row">
                <p className="-mt-12 text-yellow-300 font-bold text-6xl ml-6 opacity-75 tracking-tighter">
                  {index + 1}
                </p>
                <p className="-mt-12 text-yellow-400 font-bold text-3xl ml-3 opacity-75 uppercase">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
