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
    </>
  );
};
