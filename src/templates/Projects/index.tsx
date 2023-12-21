import { H2Pages } from "../../components/H2Pages";
import { TitlePage } from "../../components/TitlePage";

export const Projects = () => {
  return (
    <>
      <TitlePage title="projects" />

      <div className="ml-[205px] mt-4">
        <p className="text-white">List of my projects</p>
        <div className="mt-16 mb-5">
          <H2Pages title="complete-apps" />
        </div>

        <div className="flex flex-wrap">
          <div className="w-80 h-52 border border-gray mr-6 mb-72">
            <a
              href="https://front-end-strapi-auth-with-next-js-and-next-auth-js.vercel.app/"
              target="_blank"
            >
              <img
                src="/assets/projectsPhotos/1.png"
                alt=""
                className="w-full h-full"
              />
            </a>
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

          <div className="w-80 h-52 border border-gray mr-6">
            <a
              href="https://blog-front-end-with-nextjs-and-react.vercel.app/"
              target="_blank"
            >
              <img
                src="/assets/projectsPhotos/2.png"
                alt=""
                className="w-full h-full"
              />
            </a>
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

          <div className="w-80 h-52 border border-gray mr-6">
            <a
              href="https://landing-pages-front-end.vercel.app/"
              target="_blank"
            >
              <img
                src="/assets/projectsPhotos/3.png"
                alt=""
                className="w-full h-full"
              />
            </a>
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

          <div className="w-80 h-52 border border-gray mr-6">
            <a
              href="https://typescript-pomodoro-react-psi.vercel.app/"
              target="_blank"
            >
              <img
                src="/assets/projectsPhotos/Pomodoro.png"
                alt=""
                className="w-full h-full"
              />
            </a>
            <p className="text-gray border border-gray p-2">
              TypeScript, React
            </p>
            <div className="text-gray border border-gray p-4">
              <h3 className="text-white font-medium text-2xl mb-4">
                Pomodoro Timer
              </h3>
              <p className="mb-6">Um Pomodoro timer</p>
              <a
                href="https://typescript-pomodoro-react-psi.vercel.app/"
                target="_blank"
                className="text-white font-medium text-base border border-primary py-2 px-4 center  hover:bg-primary duration-500 transition-all hover:brightness-50 mr-4"
              >
                Live &lt;~&gt;
              </a>
              <a
                href="https://github.com/rdGxd/typescript_pomodoro_react"
                target="_blank"
                className="text-white font-medium text-base border border-gray py-2 px-4 center  hover:bg-gray duration-500 transition-all hover:brightness-50"
              >
                GitHub &lt;~&gt;
              </a>
            </div>
          </div>

          <div className="w-80 h-52 border border-gray mr-6">
            <a
              href="https://jogo-da-velha-com-react-hooks-e-react-context.vercel.app/"
              target="_blank"
            >
              <img
                src="/assets/projectsPhotos/JogoDaVelha.png"
                alt=""
                className="w-full h-full"
              />
            </a>
            <p className="text-gray border border-gray p-2">
              React, JavaScript
            </p>
            <div className="text-gray border border-gray p-4">
              <h3 className="text-white font-medium text-2xl mb-4">
                Jogo da velha
              </h3>
              <p className="mb-6">
                Jogo da velha criado usando: react-hooks e react-context
              </p>
              <a
                href="https://jogo-da-velha-com-react-hooks-e-react-context.vercel.app/"
                target="_blank"
                className="text-white font-medium text-base border border-primary py-2 px-4 center  hover:bg-primary duration-500 transition-all hover:brightness-50 mr-4"
              >
                Live &lt;~&gt;
              </a>
              <a
                href="https://github.com/rdGxd/jogo-da-velha-com-react-hooks-e-react-context"
                target="_blank"
                className="text-white font-medium text-base border border-gray py-2 px-4 center  hover:bg-gray duration-500 transition-all hover:brightness-50"
              >
                GitHub &lt;~&gt;
              </a>
            </div>
          </div>

          <div className="w-80 h-52 border border-gray mb-72">
            <a
              href="https://lista-tarefas-react-one.vercel.app/"
              target="_blank"
            >
              <img
                src="/assets/projectsPhotos/Lista.png"
                alt=""
                className="w-full h-full"
              />
            </a>
            <p className="text-gray border border-gray p-2">
              React, JavaScript
            </p>
            <div className="text-gray border border-gray p-4">
              <h3 className="text-white font-medium text-2xl mb-4">
                Lista de tarefas
              </h3>
              <p className="mb-6">Lista de tarefas com React</p>
              <a
                href="https://lista-tarefas-react-one.vercel.app/"
                target="_blank"
                className="text-white font-medium text-base border border-primary py-2 px-4 center  hover:bg-primary duration-500 transition-all hover:brightness-50 mr-4"
              >
                Live &lt;~&gt;
              </a>
              <a
                href="https://github.com/rdGxd/Lista_Tarefas_React"
                target="_blank"
                className="text-white font-medium text-base border border-gray py-2 px-4 center  hover:bg-gray duration-500 transition-all hover:brightness-50"
              >
                GitHub &lt;~&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
