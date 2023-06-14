import Krew from "../../kylechin-website/public/images/krew.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="mx-5 sm:mx-10 my-16" id="projects">
      <h2 className="font-bold text-5xl text-accent-100">Projects</h2>
      <div className="mt-8 lg:w-1/2">
        <a
          href="https://3devguys.github.io/"
          className="group relative block bg-gray-700 hover:bg-black"
        >
          <Image
            alt="Krew Home Inspectors"
            src={Krew}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent-100">
              Website
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Krew Home Inspectors
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  A responsive website designed for better SEO and developed
                  with two friends to create a simplistic website for clients to
                  book a home inspection.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
