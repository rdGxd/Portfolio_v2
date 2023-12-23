import { H2Pages } from "../../components/H2Pages";
import { TitlePage } from "../../components/TitlePage";

export const Contacts = () => {
  return (
    <main>
      <TitlePage title="contacts" />

      <article className="ml-[205px]">
        <p className="mt-4 text-white">Quem sou eu? </p>

        <section className="flex items-center">
          <p className="text-gray">
            Estou interessado em oportunidades freelance. No entanto, <br /> se
            você tiver outra solicitação ou dúvida, não <br />
            hesite em entrar em contato comigo
          </p>

          <div className="border border-gray p-4 ml-[480px]">
            <p className="font-semibold text-white ">Message me here</p>
            <div className="flex mt-4 text-gray">
              <img src="/assets/images/Discord.svg" alt="" className="mr-3 " />
              <p className="">_rdg</p>
            </div>

            <div className="flex mt-4 text-gray">
              <img src="/assets/images/Email.svg" alt="" className="mr-3 " />
              <p className="">rodriigo.hora@outlook.com.br</p>
            </div>
          </div>
        </section>

        <H2Pages title="all-media" />
        <section className="flex">
          <a
            href="https://twitter.com/rdGxd"
            className="flex items-center mt-5 mr-5 text-gray"
            target="_blank"
          >
            <img src="/assets/images/Twitter.svg" alt="" />
            <p className="ml-2">@rdGxd</p>
          </a>

          <a
            href="https://www.linkedin.com/in/rdgxd/"
            className="flex items-center mt-5 mr-5 text-gray"
            target="_blank"
          >
            <img src="/assets/images/Linkedin.svg" alt="" />
            <p className="ml-2">rdgxd</p>
          </a>

          <a
            href="https://github.com/rdGxd"
            className="flex items-center mt-5 text-gray"
            target="_blank"
          >
            <img src="/assets/images/Github.svg" alt="" />
            <p className="ml-2">rdGxd</p>
          </a>
        </section>
      </article>
    </main>
  );
};
