export const Footer = () => {
  return (
    <footer className="border-t border-gray lg:mt-10">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto xl:py-8">
        <div className="flex lg:justify-center 2xl:justify-around md:ml-10 sm:flex-wrap sm:justify-center">
          <div className="mb-6 md:mb-0 ">
            <a href="#" className="flex items-center">
              <img src="/assets/images/logo.svg" className="w-4 h-4 mr-1" />
              <span className="mr-6 text-base font-medium text-white md:mr-1">
                Rodrigo
              </span>
              <span className="ml-3 md:ml-1 text-gray">
                rodriigo.hora@outlook.com.br
              </span>
            </a>
            <span className="ml-3 text-white">
              Web designer and front-end developer
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:flex md:flex-wrap md:ml-28 sm:justify-center sm:flex sm:ml-5">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Media
              </h2>
              <ul className="flex font-medium text-gray-500 dark:text-gray-400">
                <li className="mr-4">
                  <a
                    href="https://github.com/rdGxd"
                    className="hover:underline"
                  >
                    <img src="/assets/images/Git.svg" alt="" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:underline">
                    <img src="/assets/images/Figma.svg" alt="" />
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    <img src="/assets/images/Discord.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 sm:mt-5">
          <span className="text-sm text-gray sm:text-center">
            © Copyright 2022. Made by Rodrigo
          </span>
        </div>
      </div>
    </footer>
  );
};
