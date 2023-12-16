import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-background font-default">
      <nav>
        <div className="xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img src="../../../public/logo.svg" alt="" className="w-10 h-10" />
            <h1 className="text-white ml-2 font-bold">Rodrigo</h1>
          </NavLink>
          <div>
            <ul className="flex font-normal text-base">
              <li>
                <NavLink
                  to={"/"}
                  className="block py-2 px-3 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray md:dark:text-blue-500 mr-8 font"
                >
                  <span className="text-primary"># </span>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/works"}
                  className="block py-2 px-3 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray md:dark:text-blue-500 mr-8"
                >
                  <span className="text-primary"># </span>
                  works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-me"}
                  className="block py-2 px-3 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray md:dark:text-blue-500 mr-8"
                >
                  <span className="text-primary"># </span>
                  about-me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contacts"}
                  className="block py-2 px-3 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray md:dark:text-blue-500 "
                >
                  <span className="text-primary"># </span>
                  contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
