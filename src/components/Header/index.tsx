import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-around py-8 border-b border-gray ">
        <NavLink to="/" className="flex items-center">
          <img src="/assets/images/logo.svg" alt="logo" className="w-4 h-4" />
          <p className="ml-2 text-white">Rodrigo</p>
        </NavLink>
        <nav>
          <article className="flex MOBILE-MENU xl:hidden">
            <div
              className="space-y-2 HAMBURGER-ICON"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <img
                src="/assets/images/MenuMobile.svg"
                alt=""
                className="w-6 h-6"
              />
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div>
                <NavLink
                  to="/"
                  className="flex items-center absolute top-0 right-0 px-[75%] py-4"
                >
                  <img
                    src="/assets/images/logo.svg"
                    alt="logo"
                    className="w-4 h-4"
                  />
                  <p className="ml-2 text-white mobile:hidden">Rodrigo</p>
                </NavLink>
              </div>

              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <img src="/assets/images/CloseMenuMobile.svg" alt="" />
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className=" text-gray hover:text-white">
                  <NavLink to="/" onClick={() => setIsNavOpen(false)}>
                    <span className="text-primary">#</span>home
                  </NavLink>
                </li>
                <li className=" text-gray hover:text-white">
                  <NavLink to="/projects" onClick={() => setIsNavOpen(false)}>
                    <span className="text-primary">#</span>projects
                  </NavLink>
                </li>
                <li className=" text-gray hover:text-white">
                  <NavLink to="/about-me" onClick={() => setIsNavOpen(false)}>
                    <span className="text-primary">#</span>about-me
                  </NavLink>
                </li>
                <li className=" text-gray hover:text-white">
                  <NavLink to="/contacts" onClick={() => setIsNavOpen(false)}>
                    <span className="text-primary">#</span>contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </article>

          <ul className="hidden space-x-8 DESKTOP-MENU xl:flex">
            <li className=" text-gray hover:text-white">
              <NavLink to="/" onClick={() => setIsNavOpen(false)}>
                <span className="text-primary">#</span>home
              </NavLink>
            </li>
            <li className=" text-gray hover:text-white">
              <NavLink
                to="/projects"
                className=""
                onClick={() => setIsNavOpen(false)}
              >
                <span className="text-primary">#</span>projects
              </NavLink>
            </li>
            <li className=" text-gray hover:text-white">
              <NavLink to="/about-me" onClick={() => setIsNavOpen(false)}>
                <span className="text-primary">#</span>about-me
              </NavLink>
            </li>
            <li className=" text-gray hover:text-white">
              <NavLink to="/contacts" onClick={() => setIsNavOpen(false)}>
                <span className="text-primary">#</span>contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: flex;
        position: absolute;
        font-size: 2rem;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #282C33;
        z-index: 10;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
};
