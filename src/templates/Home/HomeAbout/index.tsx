import { NavLink } from "react-router-dom";
import { HomeH2 } from "../../../components/HomeH2";

export const HomeAbout = () => {
  return (
    <>
      <div className="flex 2xl:ml-52 mt-28 md:ml-10">
        <HomeH2 title="about-me" />
      </div>
      <div className="flex md:flex-wrap 2xl:ml-62">
        <div className="w-[515px] mt-6 ml-60 md:ml-16 2xl:ml-64">
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
          <div className="mt-9">
            <NavLink
              to="/about"
              className="border border-primary text-white py-2 px-4 "
            >
              Read more -&gt;
            </NavLink>
          </div>
        </div>
        <div className="lg:ml-72 2xl:ml-96 md:ml-32">
          <img src="/assets/images/HomeAbout.svg" alt="" />
        </div>
      </div>
    </>
  );
};
