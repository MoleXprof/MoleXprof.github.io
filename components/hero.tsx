import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <div className="mx-5 sm:mx-10 mt-10 sm:mt-20 md:mt-40 lg:mt-52">
        <p className="text-lg sm:text-2xl font-medium text-black font-mono">
          Hello, my name is
        </p>
        <h1 className="text-accent-100 font-extrabold text-5xl md:text-7xl mt-2 flex">
          Kyle Chin <h2 className='font-mono -ml-2 text-accent-200'>.</h2>
        </h1>
        <div className="flex flex-row mt-3">
          <p className="sm:text-3xl text-2xl font-medium font-mono">
            A
          </p>
          <div className="text-2xl sm:text-3xl md:ml-5 ml-4 text-black font-mono">
            <Typewriter
              options={{
                strings: ['Software Developer', 'Student', 'Climber'],
                autoStart: true,
                loop: true
              }}
            />
          </div>
        </div>
        <div className="md:h-3 h-2 md:w-20 w-16 mt-3 bg-accent-100"/>
      </div>
    </div>
  );  
};

export default Hero;
