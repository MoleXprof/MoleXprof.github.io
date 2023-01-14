type DotTypes = {
  height: number;
  width: number;
};

const Dots = ({ height, width }: DotTypes) => {
  return (
    <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <svg
        className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 504 484"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-300"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={width}
          height={height}
          fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
        />
      </svg>
    </div>
  );
};

export default Dots;
