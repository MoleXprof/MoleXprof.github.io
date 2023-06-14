const Footer = () => {
  return (
    <div className="bg-gray-50 w-full flex justify-between px-5 sm:px-10 pt-16 sm:pt-20">
      <p className="text-right md:mr-20 mr-10 mb-2 opacity-20 font-bold uppercase">
        Built by Kyle Chin
      </p>
      <div className="sm:flex sm:items-center sm:justify-between justify-end">
          <div className="space-x-2 mb-1">
              <a href="https://www.linkedin.com/in/kyle-chin-527959231/" className="text-accent-100 hover:text-accent-200">
                <i className="ri-linkedin-box-fill text-2xl"></i>
              </a>
              <a href="https://github.com/MoleXprof" className="text-accent-100 hover:text-accent-200 text-2xl">
                <i className="ri-github-fill"></i>
              </a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
