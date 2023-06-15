const ResumeBar = () => {
    return (
      <div className="w-full my-16 justify-center items-center">
        <div className="text-center my-4">
          <h3 className="text-2xl sm:text-5xl font-bold text-black">
            Wish to see the full resume?
          </h3>
          <h4 className="text-lg sm:text-2xl font-semibold text-gray-400 font-mono">
            Download below
          </h4>
        </div>
        <div className="text-center mt-3 sm:mt-6">
          <a
            href="/book"
            className="bg-accent-100 text-white rounded-md px-6 py-2 sm:py-2.5 shadow-lg hover:bg-accent-200 font-medium text-md sm:text-lg"
          >
            Resume
          </a>
        </div>
      </div>
    )
  }
  
  export default ResumeBar
  