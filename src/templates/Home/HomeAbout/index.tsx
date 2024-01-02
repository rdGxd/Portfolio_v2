import { NavLink } from "react-router-dom";
import { HomeH2 } from "../../../components";

export const HomeAbout = () => {
  return (
    <article>
      <div className="flex 2xl:ml-24 mt-28 md:ml-10 items-center">
        <HomeH2 title="about-me" />
      </div>
      <div className="flex 2xl:ml-62 md:flex-wrap sm:flex-wrap 2xl:flex-nowrap lg:ml-16 xl:flex-nowrap xl:ml-0 mobile:w-full mobile:justify-normal mobile:block mobile:ml-0 lg:flex 2xl:flex ">
        <div className="w-[515px] mt-6 ml-60 md:ml-16 2xl:ml-28 sm:ml-10 2xl:w-full xl:w-full mobile:w-full  mobile:ml-0 lg:w-[515px] lg:ml-0 ">
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
          <div className="mt-4 xl:mt-9 lg:mb-4">
            <NavLink
              to="/about"
              className="px-4 py-2 text-white border border-primary "
            >
              Read more -&gt;
            </NavLink>
          </div>
        </div>
        <div className="xl:ml-62 md:ml-32 md:w-full sm:ml-36 lg:flex lg:w-1/3 2xl:w-full ">
          <img src="/assets/images/HomeAbout.svg" alt="" />
        </div>
      </div>
    </article>
  );
};
