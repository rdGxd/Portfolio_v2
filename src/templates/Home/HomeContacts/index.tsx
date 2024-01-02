import { HomeH2 } from "../../../components";

export const HomeContacts = () => {
  return (
    <article>
      <div className="flex 2xl:ml-32 xl:mt-28 md:ml-10 lg:mt-8 md:mt-4 sm:mt-10 2xl:mt-10 mobile:block lg:flex lg:items-center">
        <HomeH2 title="contacts" />
      </div>
      <div className="flex items-center xl:ml-14 xl:mt-5 md:flex-wrap md:ml-0 md:mt-5 md:justify-center 2xl:justify-normal lg:justify-normal mobile:flex-wrap 2xl:ml-0 2xl:my-0">
        <p className="text-gray w-[505px] 2xl:ml-36 xl:ml-2 lg:ml-14 sm:mt-5 sm:mb-5 mobile:my-5 ">
          Estou interessado em oportunidades freelance. No entanto, se você
          tiver outra solicitação ou dúvida, não hesite em entrar em contato
          comigo
        </p>
        <div className="p-4 border border-gray xl:ml-72 2xl:ml-[450px] md:mt-5 md:mb-10 sm:ml-0 lg:ml-28 ">
          <p className="font-semibold text-white ">Message me here</p>
          <div className="flex mt-4 text-gray">
            <img src="/assets/images/Discord.svg" alt="" className="mr-3 " />
            <p className="">_rdg</p>
          </div>

          <div className="flex mt-4 text-gray">
            <img src="/assets/images/Email.svg" alt="" className="mr-3" />
            <p className=" sm:mr-3">rodriigo.hora@outlook.com.br</p>
          </div>
        </div>
      </div>
    </article>
  );
};
