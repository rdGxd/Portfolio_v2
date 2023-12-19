import { H2Pages } from "../../components/H2Pages";
import { TitlePage } from "../../components/TitlePage";

export const Contacts = () => {
  return (
    <>
      <TitlePage title="contacts" />

      <div className="ml-[205px]">
        <p className="flex mt-4 text-white">Quem sou eu? </p>

        <div className="flex items-center">
          <p className="text-gray">
            Estou interessado em oportunidades freelance. No entanto, <br /> se
            você tiver outra solicitação ou dúvida, não <br />
            hesite em entrar em contato comigo
          </p>

          <div className="border border-gray p-4 ml-[480px]">
            <p className="text-white font-semibold ">Message me here</p>
            <div className="flex text-gray mt-4">
              <img src="../../public/Discord.svg" alt="" className=" mr-3" />
              <p className="">_rdg</p>
            </div>

            <div className="flex text-gray mt-4">
              <img src="../../public/Email.svg" alt="" className=" mr-3" />
              <p className="">rodriigo.hora@outlook.com.br</p>
            </div>
          </div>
        </div>

        <H2Pages title="all-media" />
        <div className="flex">
          <a
            href="https://twitter.com/rdGxd"
            className="flex text-gray mt-5 mr-5 items-center"
            target="_blank"
          >
            <img src="../../public/Twitter.svg" alt="" />
            <p className="ml-2">@rdGxd</p>
          </a>

          <a
            href="https://www.linkedin.com/in/rdgxd/"
            className="flex text-gray mt-5 mr-5 items-center"
            target="_blank"
          >
            <img src="../../public/Linkedin.svg" alt="" />
            <p className="ml-2">rdgxd</p>
          </a>

          <a
            href="https://github.com/rdGxd"
            className="flex text-gray mt-5 items-center"
            target="_blank"
          >
            <img src="../../public/Github.svg" alt="" />
            <p className="ml-2">rdGxd</p>
          </a>
        </div>
      </div>
    </>
  );
};
