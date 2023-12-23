import { NavLink } from "react-router-dom";
import { HomeH2 } from "../../../components/HomeH2";

export const HomeProjects = () => {
  return (
    <article>
      <div className="flex items-center 2xl:ml-52 mt-[74px] md:flex-wrap md:ml-10">
        <HomeH2 title="projects" />
        <NavLink
          to={"/projects"}
          className="text-white text-base font-medium xl:ml-52 md:ml-4 2xl:ml-[650px] sm:ml-4"
        >
          view all ~~&gt;{" "}
        </NavLink>
      </div>

      <div className="grid mt-12 xl:grid-cols-3 2xl:grid-cols-4 2xl:ml-96 justify-items-center lg:flex md:flex md:flex-wrap sm:flex-wrap">
        <div className="border w-80 h-52 border-gray lg:mr-4 lg:ml-16 md:ml-10 ">
          <a href="https://front-end-strapi-auth-with-next-js-and-next-auth-js.vercel.app/">
            <img
              src="/assets/projectsPhotos/1.png"
              alt=""
              className="w-full h-full"
            />
          </a>
          <p className="p-2 border text-gray border-gray">
            NextJS, TypeScript, Styled-Components, GraphQL
          </p>
          <div className="p-4 border text-gray border-gray">
            <h3 className="mb-4 font-medium text-white text-22xl">
              Página de login
            </h3>
            <p className="mb-6">
              Autenticação de usuários com NextJS e NextAuth.js{" "}
            </p>
            <a
              href="https://front-end-strapi-auth-with-next-js-and-next-auth-js.vercel.app/"
              target="_blank"
              className="px-4 py-2 mr-4 text-base font-medium text-white transition-all duration-500 border border-primary center hover:bg-primary hover:brightness-50"
            >
              Live &lt;~&gt;
            </a>
            <a
              href="https://github.com/rdGxd/FrontEnd_Strapi_Auth_With_Next.JS_and_NextAuth.JS"
              target="_blank"
              className="px-4 py-2 text-base font-medium text-white transition-all duration-500 border border-gray center hover:bg-gray hover:brightness-50"
            >
              GitHub &lt;~&gt;
            </a>
          </div>
        </div>

        <div className="border w-80 h-52 border-gray lg:mr-4 md:ml-5 sm:mt-72 2xl:mt-0 lg:mt-0 md:mt-0 ">
          <a href="https://blog-front-end-with-nextjs-and-react.vercel.app/">
            <img
              src="/assets/projectsPhotos/2.png"
              alt=""
              className="w-full h-full"
            />
          </a>
          <p className="p-2 border text-gray border-gray">
            NextJS, TypeScript, Styled-Components, GraphQL, Disqus
          </p>
          <div className="p-4 border text-gray border-gray">
            <h3 className="mb-4 font-medium text-white text-22xl">
              Blog Pessoal
            </h3>
            <p className="mb-6">
              Projeto de Blog pessoal para consumir uma API com NextJS
            </p>
            <a
              href="https://blog-front-end-with-nextjs-and-react.vercel.app/"
              target="_blank"
              className="px-4 py-2 mr-4 text-base font-medium text-white transition-all duration-500 border border-primary center hover:bg-primary hover:brightness-50"
            >
              Live &lt;~&gt;
            </a>
            <a
              href="https://github.com/rdGxd/blog_front_end_with_nextjs--and_react"
              target="_blank"
              className="px-4 py-2 text-base font-medium text-white transition-all duration-500 border border-gray center hover:bg-gray hover:brightness-50"
            >
              GitHub &lt;~&gt;
            </a>
          </div>
        </div>

        <div className="border w-80 h-52 border-gray md:mt-64 md:ml-10 sm:mt-72 2xl:mt-0 lg:ml-16 2xl:ml-5 xl:mt-0 xl:ml-5">
          <a href="https://landing-pages-front-end.vercel.app/">
            <img
              src="/assets/projectsPhotos/3.png"
              alt=""
              className="w-full h-full"
            />
          </a>
          <p className="p-2 border text-gray border-gray">
            React, Styled-icons, Styled-Components
          </p>
          <div className="p-4 border text-gray border-gray">
            <h3 className="mb-4 font-medium text-white text-22xl">
              Landing Page
            </h3>
            <p className="mb-6">
              Landing Page criada para consumir uma API no Strapi
            </p>
            <a
              href="https://landing-pages-front-end.vercel.app/"
              target="_blank"
              className="px-4 py-2 mr-4 text-base font-medium text-white transition-all duration-500 border border-primary center hover:bg-primary hover:brightness-50"
            >
              Live &lt;~&gt;
            </a>
            <a
              href="https://github.com/rdGxd/landing_pages_Front-End"
              target="_blank"
              className="px-4 py-2 text-base font-medium text-white transition-all duration-500 border border-gray center hover:bg-gray hover:brightness-50"
            >
              GitHub &lt;~&gt;
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
