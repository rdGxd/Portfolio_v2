import { NavLink } from "react-router-dom";
import { HomeH2 } from "../../../components/HomeH2";

export const HomeProjects = () => {
  return (
    <>
      <div className="flex items-center ml-52 mt-[74px] md:flex-wrap md:ml-10">
        <HomeH2 title="projects" />
        <NavLink
          to={"/projects"}
          className="text-white text-base font-medium ml-52 md:ml-4"
        >
          view all ~~&gt;{" "}
        </NavLink>
      </div>

      <div className="grid grid-cols-4 ml-44 mt-12 justify-items-center ">
        <div className="w-80 h-52 border border-gray">
          <NavLink to="#">
            <img
              src="/assets/projectsPhotos/1.png"
              alt=""
              className="w-full h-full"
            />
          </NavLink>
          <p className="text-gray border border-gray p-2">
            NextJS, TypeScript, Styled-Components, GraphQL
          </p>
          <div className="text-gray border border-gray p-4">
            <h3 className="text-white font-medium text-2xl mb-4">
              Página de login
            </h3>
            <p className="mb-6">
              Autenticação de usuários com NextJS e NextAuth.js{" "}
            </p>
            <a
              href="https://front-end-strapi-auth-with-next-js-and-next-auth-js.vercel.app/"
              target="_blank"
              className="text-white font-medium text-base border border-primary py-2 px-4 center  hover:bg-primary duration-500 transition-all hover:brightness-50 mr-4"
            >
              Live &lt;~&gt;
            </a>
            <a
              href="https://github.com/rdGxd/FrontEnd_Strapi_Auth_With_Next.JS_and_NextAuth.JS"
              target="_blank"
              className="text-white font-medium text-base border border-gray py-2 px-4 center  hover:bg-gray duration-500 transition-all hover:brightness-50"
            >
              GitHub &lt;~&gt;
            </a>
          </div>
        </div>

        <div className="w-80 h-52 border border-gray">
          <NavLink to="#">
            <img
              src="/assets/projectsPhotos/2.png"
              alt=""
              className="w-full h-full"
            />
          </NavLink>
          <p className="text-gray border border-gray p-2">
            NextJS, TypeScript, Styled-Components, GraphQL, Disqus
          </p>
          <div className="text-gray border border-gray p-4">
            <h3 className="text-white font-medium text-2xl mb-4">
              Blog Pessoal
            </h3>
            <p className="mb-6">
              Projeto de Blog pessoal para consumir uma API com NextJS
            </p>
            <a
              href="https://blog-front-end-with-nextjs-and-react.vercel.app/"
              target="_blank"
              className="text-white font-medium text-base border border-primary py-2 px-4 center  hover:bg-primary duration-500 transition-all hover:brightness-50 mr-4"
            >
              Live &lt;~&gt;
            </a>
            <a
              href="https://github.com/rdGxd/blog_front_end_with_nextjs--and_react"
              target="_blank"
              className="text-white font-medium text-base border border-gray py-2 px-4 center  hover:bg-gray duration-500 transition-all hover:brightness-50"
            >
              GitHub &lt;~&gt;
            </a>
          </div>
        </div>

        <div className="w-80 h-52 border border-gray">
          <NavLink to="#">
            <img
              src="/assets/projectsPhotos/3.png"
              alt=""
              className="w-full h-full"
            />
          </NavLink>
          <p className="text-gray border border-gray p-2">
            React, Styled-icons, Styled-Components
          </p>
          <div className="text-gray border border-gray p-4">
            <h3 className="text-white font-medium text-2xl mb-4">
              Landing Page
            </h3>
            <p className="mb-6">
              Landing Page criada para consumir uma API no Strapi
            </p>
            <a
              href="https://landing-pages-front-end.vercel.app/"
              target="_blank"
              className="text-white font-medium text-base border border-primary py-2 px-4 center  hover:bg-primary duration-500 transition-all hover:brightness-50 mr-4"
            >
              Live &lt;~&gt;
            </a>
            <a
              href="https://github.com/rdGxd/landing_pages_Front-End"
              target="_blank"
              className="text-white font-medium text-base border border-gray py-2 px-4 center  hover:bg-gray duration-500 transition-all hover:brightness-50"
            >
              GitHub &lt;~&gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
