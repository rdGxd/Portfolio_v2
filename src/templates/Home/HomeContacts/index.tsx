import { HomeH2 } from "../../../components/HomeH2";

export const HomeContacts = () => {
  return (
    <article>
      <div className="flex 2xl:ml-52 lg:mt-28 lg:mb-11 md:ml-10">
        <HomeH2 title="contacts" />
      </div>
      <div className="flex 2xl:items-center md:flex-wrap md:ml-14 md:mt-5">
        <p className="text-gray w-[505px] 2xl:ml-60 lg:ml-20">
          Estou interessado em oportunidades freelance. No entanto, se você
          tiver outra solicitação ou dúvida, não hesite em entrar em contato
          comigo
        </p>
        <div className="p-4 border border-gray lg:ml-72 2xl:ml-96 md:mt-5">
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
      </div>
    </article>
  );
};
