export const Contacts = () => {
  return (
    <>
      <div className="flex mt-[53px] ml-[205px]">
        <h1 className="text-white font-semibold text-3xl">
          <span className="text-primary">/</span>contacts
        </h1>
      </div>

      <p className="flex mt-4 ml-[205px] text-white">Quem sou eu?</p>

      <div className="flex  ml-[205px] items-center ">
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
    </>
  );
};
