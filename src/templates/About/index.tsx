import { H2Pages } from "../../components/H2Pages";
import { TitlePage } from "../../components/TitlePage";

export const AboutMe = () => {
  return (
    <>
      <TitlePage title="about-me" />
      <div className="flex flex-wrap">
        <div className="w-[515px] mt-6 ml-[220px]">
          <p className="text-gray">
            Graduando em Análise e Desenvolvimento de Sistemas. Desde o fim de
            2022 venho buscando o conhecimento de mim para mim, seja atuando em
            projetos próprios para aprimorar o aprendizado ou acompanhando
            alguns projetos terceiros <br />
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
        <div className="ml-[600px]">
          <img src="../../public/HomeAbout.svg" alt="" />
        </div>
      </div>

      <div className="flex mt-[53px] ml-[205px]">
        <H2Pages title="skills" />
      </div>

      <div className="flex mt-4 ml-52">
        <div className="border border-gray mr-4 w-64">
          <h3 className="text-white p-2">Languages</h3>
          <div className="border-t border-gray p-2 text-gray">
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Python</p>
          </div>
        </div>

        <div className="border border-gray mr-4 w-64">
          <h3 className="text-white p-2">Databases</h3>
          <div className="border-t border-gray p-2 text-gray">
            <p>MongoDB</p>
            <p>PostgreSQL</p>
            <p>MySQL</p>
          </div>
        </div>

        <div className="border border-gray mr-4 w-64">
          <h3 className="text-white p-2">Tools</h3>
          <div className="border-t border-gray p-2 text-gray ">
            <p>VSCode</p>
            <p>Figma</p>
            <p>Git</p>
            <p>GoogleFonts</p>
          </div>
        </div>
        <br />
        <div className="border border-gray mr-4 w-64">
          <h3 className="text-white p-2">Other</h3>
          <div className="border-t border-gray p-2 text-gray">
            <p>HTML</p>
            <p>CSS</p>
            <p>EJS</p>
            <p>REST</p>
            <p>SCSS</p>
          </div>
        </div>
        <div className="border border-gray w-64">
          <h3 className="text-white p-2">FrameWorks</h3>
          <div className="border-t border-gray p-2 text-gray">
            <p>React</p>
            <p>NextJS</p>
            <p>ExpressJS</p>
            <p>Tailwind</p>
            <p>And others...</p>
          </div>
        </div>
      </div>

      <div className="flex mt-[53px] ml-[205px]">
        <H2Pages title="my-fun-facts" />
      </div>

      <div className="flex ml-52">
        <div className="grid grid-cols-2 gap-3 mt-5 items-center">
          <p className="text-gray border border-gray p-1">
            I like winter more than summer
          </p>
          <p className="text-gray  border border-gray  p-1">
            I often bike with my friends
          </p>
          <p className="text-gray border border-gray  p-1">
            I like pizza and pasta{" "}
          </p>
          <p className="text-gray border border-gray  p-1">
            I was in Egypt, Poland and Turkey{" "}
          </p>
          <p className="text-gray border border-gray  p-1">
            My favorite movie is The Green Mile{" "}
          </p>
          <p className="text-gray border border-gray  p-1">
            I am still in school{" "}
          </p>
          <p className="text-gray border border-gray  p-1">
            I don’t have any siblings{" "}
          </p>
        </div>
        <img src="../../public/AboutFun.svg" alt="" className="ml-96" />
      </div>
    </>
  );
};
