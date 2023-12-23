import { H2Pages } from "../../components/H2Pages";
import { TitlePage } from "../../components/TitlePage";

export const AboutMe = () => {
  return (
    <main>
      <TitlePage title="about-me" />
      <article className="flex ">
        <div className="w-[515px] mt-6 ml-[220px] xl:ml-44">
          <p className="text-gray">
            Graduando em Análise e Desenvolvimento de Sistemas. Desde o fim de
            2022 venho buscando o conhecimento de mim para mim, seja atuando em
            projetos próprios para aprimorar o aprendizado ou acompanhando
            axluns projetos terceiros <br />
            <br />e boas práticas e princípios de programação. . Também tenho
            experiência em Montagem e manutenção de computadores
            <br />
            <br />
            Gosto de resolver problemas e criar soluções que olhem tanto para a
            qualidade do código quanto para a necessidade dos clientes. Escolhi
            cursar Análise de Sistemas porque acredito ser extremamente
            necessário entender o processo como um todo para desenvolver da
            melhor forma possível. <br />
            <br />
            Pretendo ingressar na área de TI, me aprofundar na área e
            desenvolver minhas habilidades. Busco uma chance e pretendo usufruir
            ao máximo da oportunidade.
          </p>
        </div>
        <div className="2xl:ml-[500px] xl:ml-28">
          <img src="/assets/images/HomeAbout.svg" alt="" />
        </div>
      </article>

      <div className="flex mt-[53px] ml-[205px] xl:ml-40">
        <H2Pages title="skills" />
      </div>

      <section className="flex mt-4 ml-52 xl:ml-44 2xl:ml-44">
        <div className="mr-4 border 2xl:w-64 xl:w-44 border-gray">
          <h3 className="p-2 text-white">Languages</h3>
          <div className="p-2 border-t border-gray text-gray">
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Python</p>
          </div>
        </div>

        <div className="mr-4 border 2xl:w-64 border-gray xl:w-44">
          <h3 className="p-2 text-white">Databases</h3>
          <div className="p-2 border-t border-gray text-gray">
            <p>MongoDB</p>
            <p>PostgreSQL</p>
            <p>MySQL</p>
          </div>
        </div>

        <div className="mr-4 border 2xl:w-64 border-gray xl:w-44">
          <h3 className="p-2 text-white">Tools</h3>
          <div className="p-2 border-t border-gray text-gray ">
            <p>VSCode</p>
            <p>Figma</p>
            <p>Git</p>
            <p>GoogleFonts</p>
          </div>
        </div>
        <br />
        <div className="mr-4 border 2xl:w-64 border-gray xl:w-44">
          <h3 className="p-2 text-white">Other</h3>
          <div className="p-2 border-t border-gray text-gray">
            <p>HTML</p>
            <p>CSS</p>
            <p>EJS</p>
            <p>REST</p>
            <p>SCSS</p>
          </div>
        </div>
        <div className="border 2xl:w-64 border-gray xl:w-44">
          <h3 className="p-2 text-white">FrameWorks</h3>
          <div className="p-2 border-t border-gray text-gray">
            <p>React</p>
            <p>NextJS</p>
            <p>ExpressJS</p>
            <p>Tailwind</p>
            <p>And others...</p>
          </div>
        </div>
      </section>

      <div className="flex mt-[53px] ml-[205px] xl:ml-40">
        <H2Pages title="my-fun-facts" />
      </div>

      <section className="flex ml-52 xl:ml-40">
        <div className="grid items-center grid-cols-2 gap-3 mt-5">
          <p className="p-1 border text-gray border-gray">
            I like winter more than summer
          </p>
          <p className="p-1 border text-gray border-gray">
            I often bike with my friends
          </p>
          <p className="p-1 border text-gray border-gray">
            I like pizza and pasta{" "}
          </p>
          <p className="p-1 border text-gray border-gray">
            I was in Egypt, Poland and Turkey{" "}
          </p>
          <p className="p-1 border text-gray border-gray">
            My favorite movie is The Green Mile{" "}
          </p>
          <p className="p-1 border text-gray border-gray">
            I am still in school{" "}
          </p>
          <p className="p-1 border text-gray border-gray">
            I don’t have any siblings{" "}
          </p>
        </div>
        <img
          src="/assets/images/AboutFun.svg"
          alt=""
          className="2xl:ml-96 xl:ml-28"
        />
      </section>
    </main>
  );
};
