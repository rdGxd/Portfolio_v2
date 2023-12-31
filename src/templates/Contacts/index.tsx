import { GoTop, H2Pages, TitlePage } from "../../components";

export const Contacts = () => {
  return (
    <main>
      <TitlePage title="contacts" />

      <article className="2xl:ml-44 xl:ml-44 lg:ml-20 md:ml-20 sm:ml-24 ">
        <p className="mt-4 text-white">Quem sou eu? </p>

        <section className="flex items-center md:mb-10 sm:ml-0 sm:flex-wrap sm:flex lg:flex-nowrap lg:mb-0 mobile:block">
          <p className="text-gray mobile:my-2">
            Estou interessado em oportunidades freelance. No entanto, <br /> se
            você tiver outra solicitação ou dúvida, não <br />
            hesite em entrar em contato comigo
          </p>

          <div className="p-4 border border-gray 2xl:ml-96 xl:ml-20 lg:mr-5 md:mr-6 sm:my-5 mobile:my-5 lg:ml-5">
            <p className="font-semibold text-white ">Message me here</p>
            <div className="flex mt-4 text-gray">
              <img src="/assets/images/Discord.svg" alt="" className="mr-3 " />
              <p className="">_rdg</p>
            </div>

            <div className="flex mt-4 text-gray">
              <img src="/assets/images/Email.svg" alt="" className="mr-3" />
              <p className="md:mr-3">rodriigo.hora@outlook.com.br</p>
            </div>
          </div>
        </section>

        <H2Pages title="all-media" />
        <section className="flex md:mb-10 sm:mb-5 ">
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
      <GoTop />
    </main>
  );
};
