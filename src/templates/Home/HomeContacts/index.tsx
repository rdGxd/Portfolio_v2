import { HomeH2 } from "../../../components/HomeH2";

export const HomeContacts = () => {
  return (
    <>
      <div className="flex lg:ml-52 lg:mt-28 lg:mb-11">
        <HomeH2 title="contacts" />
      </div>
      <div className="flex 2xl:items-center">
        <p className="text-gray w-[505px] ml-60">
          Estou interessado em oportunidades freelance. No entanto, se você
          tiver outra solicitação ou dúvida, não hesite em entrar em contato
          comigo
        </p>
        <div className="border border-gray p-4 lg:ml-32 2xl:ml-96">
          <p className="text-white font-semibold ">Message me here</p>
          <div className="flex text-gray mt-4">
            <img src="/assets/images/Discord.svg" alt="" className=" mr-3" />
            <p className="">_rdg</p>
          </div>

          <div className="flex text-gray mt-4">
            <img src="/assets/images/Email.svg" alt="" className=" mr-3" />
            <p className="">rodriigo.hora@outlook.com.br</p>
          </div>
        </div>
      </div>
    </>
  );
};
