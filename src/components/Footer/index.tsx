export const Footer = () => {
  return (
    <footer className="border-t border-gray mt-36">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="../../public/logo.svg" className="w-4 h-4 mr-1" />
              <span className="text-base font-medium text-white mr-6">
                Rodrigo
              </span>
              <span className="ml-3 text-gray">
                rodriigo.hora@outlook.com.br
              </span>
            </a>
            <span className="ml-3 text-white">
              Web designer and front-end developer
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Media
              </h2>
              <ul className="flex text-gray-500 dark:text-gray-400 font-medium">
                <li className="mr-4">
                  <a
                    href="https://github.com/rdGxd"
                    className="hover:underline"
                  >
                    <img src="../../public/Git.svg" alt="" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:underline">
                    <img src="../../public/Figma.svg" alt="" />
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    <img src="../../public/Discord.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <span className="text-sm text-gray sm:text-center dark:text-gray-400">
            © Copyright 2022. Made by Rodrigo
          </span>
        </div>
      </div>
    </footer>
  );
};
