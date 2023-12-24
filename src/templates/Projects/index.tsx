import { GoTop } from "../../components/GoTop";
import { H2Pages } from "../../components/H2Pages";
import { TitlePage } from "../../components/TitlePage";

export const Projects = () => {
  return (
    <main>
      <TitlePage title="projects" />

      <article className="2xl:ml-24 2xl:mt-4 xl:ml-44 xl:mt-4 lg:ml-16 lg:mt-4 md:mt-5">
        <p className="text-white md:ml-24 sm:ml-24 sm:mt-5 lg:ml-0 2xl:ml-24">
          List of my projects
        </p>
        <div className="mb-5 2xl:mt-10 xl:mt-5 lg:mt-4 md:mt-4 md:ml-24 sm:ml-24 sm:mt-4 lg:ml-0 2xl:ml-24">
          <H2Pages title="complete-apps" />
        </div>

        <section className="flex flex-wrap sm:justify-center 2xl:grid 2xl:grid-cols-3 2xl:ml-24 ">
          <div className="mr-6 border 2xl:w-80 2xl:h-52 border-gray mb-72 md:w-full md:ml-4 md:mr-4 md:mb-48 2xl:mt-0 lg:ml-0">
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
            <p className="p-2 border text-gray border-gray">
              NextJS, TypeScript, Styled-Components, GraphQL
            </p>
            <div className="p-4 border text-gray border-gray">
              <h3 className="mb-4 text-2xl font-medium text-white">
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

          <div className="mt-10 mr-6 border 2xl:w-80 2xl:h-52 border-gray md:w-full mb-72 md:ml-4 md:mr-4 md:mb-56 2xl:mt-0 ">
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
            <p className="p-2 border text-gray border-gray">
              NextJS, TypeScript, Styled-Components, GraphQL, Disqus
            </p>
            <div className="p-4 border text-gray border-gray">
              <h3 className="mb-4 text-2xl font-medium text-white">
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

          <div className="mr-6 border 2xl:w-80 2xl:h-52 border-gray md:w-full md:ml-4 md:mr-4 mb-72 md:mb-56 2xl:mt-0 ">
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
            <p className="p-2 border text-gray border-gray">
              React, Styled-icons, Styled-Components
            </p>
            <div className="p-4 border text-gray border-gray">
              <h3 className="mb-4 text-2xl font-medium text-white">
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

          <div className="mr-6 border 2xl:w-80 2xl:h-52 border-gray md:w-full md:ml-4 md:mr-4 mb-72 md:mb-56 2xl:mt-10 2xl:ml-0">
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
            <p className="p-2 border text-gray border-gray">
              TypeScript, React
            </p>
            <div className="p-4 border text-gray border-gray">
              <h3 className="mb-4 text-2xl font-medium text-white">
                Pomodoro Timer
              </h3>
              <p className="mb-6">Um Pomodoro timer</p>
              <a
                href="https://typescript-pomodoro-react-psi.vercel.app/"
                target="_blank"
                className="px-4 py-2 mr-4 text-base font-medium text-white transition-all duration-500 border border-primary center hover:bg-primary hover:brightness-50"
              >
                Live &lt;~&gt;
              </a>
              <a
                href="https://github.com/rdGxd/typescript_pomodoro_react"
                target="_blank"
                className="px-4 py-2 text-base font-medium text-white transition-all duration-500 border border-gray center hover:bg-gray hover:brightness-50"
              >
                GitHub &lt;~&gt;
              </a>
            </div>
          </div>

          <div className="mb-64 mr-6 border 2xl:w-80 2xl:h-52 border-gray lg:mt-0 md:w-full md:ml-4 md:mr-4 md:mb-56 2xl:mt-10">
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
            <p className="p-2 border text-gray border-gray">
              React, JavaScript
            </p>
            <div className="p-4 border text-gray border-gray">
              <h3 className="mb-4 text-2xl font-medium text-white">
                Jogo da velha
              </h3>
              <p className="mb-6">
                Jogo da velha criado usando: react-hooks e react-context
              </p>
              <a
                href="https://jogo-da-velha-com-react-hooks-e-react-context.vercel.app/"
                target="_blank"
                className="px-4 py-2 mr-4 text-base font-medium text-white transition-all duration-500 border border-primary center hover:bg-primary hover:brightness-50"
              >
                Live &lt;~&gt;
              </a>
              <a
                href="https://github.com/rdGxd/jogo-da-velha-com-react-hooks-e-react-context"
                target="_blank"
                className="px-4 py-2 text-base font-medium text-white transition-all duration-500 border border-gray center hover:bg-gray hover:brightness-50"
              >
                GitHub &lt;~&gt;
              </a>
            </div>
          </div>

          <div className="border 2xl:w-80 2xl:h-52 border-gray mb-72 md:w-full md:ml-4 md:mr-4 2xl:mt-10 lg:mt-0">
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
            <p className="p-2 border text-gray border-gray">
              React, JavaScript
            </p>
            <div className="p-4 border text-gray border-gray">
              <h3 className="mb-4 text-2xl font-medium text-white">
                Lista de tarefas
              </h3>
              <p className="mb-6">Lista de tarefas com React</p>
              <a
                href="https://lista-tarefas-react-one.vercel.app/"
                target="_blank"
                className="px-4 py-2 mr-4 text-base font-medium text-white transition-all duration-500 border border-primary center hover:bg-primary hover:brightness-50"
              >
                Live &lt;~&gt;
              </a>
              <a
                href="https://github.com/rdGxd/Lista_Tarefas_React"
                target="_blank"
                className="px-4 py-2 text-base font-medium text-white transition-all duration-500 border border-gray center hover:bg-gray hover:brightness-50"
              >
                GitHub &lt;~&gt;
              </a>
            </div>
          </div>
        </section>
      </article>
      <GoTop />
    </main>
  );
};
