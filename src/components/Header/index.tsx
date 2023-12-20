import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-around border-b border-gray py-8">
        <NavLink to="/" className="flex items-center">
          <img src="../../public/logo.svg" alt="logo" className="w-4 h-4" />
          <p className="text-white ml-2">Rodrigo</p>
        </NavLink>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >

              <img src="../../public/MenuMobile.svg" alt="" className="w-6 h-6"/>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div>
                <NavLink
                  to="/"
                  className="flex items-center absolute top-0 right-0 px-[75%] py-4"
                >
                  <img
                    src="../../public/logo.svg"
                    alt="logo"
                    className="w-4 h-4"
                  />
                  <p className="text-white ml-2">Rodrigo</p>
                </NavLink>
              </div>

              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <img
                  src="../../public/CloseMenuMobile.svg"
                  alt=""
                />
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className=" text-gray hover:text-white">
                  <NavLink to="/">
                    <span className="text-primary">#</span>home
                  </NavLink>
                </li>
                <li className=" text-gray hover:text-white">
                  <NavLink to="/works">
                    <span className="text-primary">#</span>works
                  </NavLink>
                </li>
                <li className=" text-gray hover:text-white">
                  <NavLink to="/about-me">
                    <span className="text-primary">#</span>about-me
                  </NavLink>
                </li>
                <li className=" text-gray hover:text-white">
                  <NavLink to="/contacts">
                    <span className="text-primary">#</span>contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden lg:flex space-x-8">
            <li className=" text-gray hover:text-white">
              <NavLink to="/">
                <span className="text-primary">#</span>home
              </NavLink>
            </li>
            <li className=" text-gray hover:text-white">
              <NavLink to="/works" className="">
                <span className="text-primary">#</span>works
              </NavLink>
            </li>
            <li className=" text-gray hover:text-white">
              <NavLink to="/about-me">
                <span className="text-primary">#</span>about-me
              </NavLink>
            </li>
            <li className=" text-gray hover:text-white">
              <NavLink to="/contacts">
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
