export const First = () => {
  return (
    <>
      <div className="flex justify-center md:flex-wrap">
        <div className="mt-16 w-[537px]">
          <h1 className="text-white font-semibold text-[32px] ">
            Rodrigo is a <span className="text-primary">web designer</span> and{" "}
            <span className="text-primary ">front-end developer</span>
          </h1>
          <p className="text-gray text-base mt-8">
            He crafts responsive websites where technologies meet creativity
          </p>
          <a
            href="mailto:rodriigo.hora@outlook.com.br"
            className="flex font-medium justify-center items-center h-10 w-36 mt-5 text-base text-white rounded-lg border border-primary"
          >
            Contact me!!
          </a>
        </div>
        <div className="w-[469px] ml-6">
          <img src="/assets/images/ImageHome.svg" alt="" />
          <div className="rounded border border-white ml-6 items-center flex p-2">
            <span className="w-4 h-4 bg-primary border border-primary " />
            <p className="text-gray ml-[10px]">
              Currently working on <span className="text-white">Portfolio</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div>
          <blockquote className="flex justify-center p-8 text-white mt-28 border border-gray w-[712px] ">
            <q className="font-medium text-xl">
              With great power comes great electricity bill
            </q>
          </blockquote>
          <p className="text-white font-normal text-2xl border-l border-r border-b border-gray flex w-40 p-2 ml-[552px]">
            - Dr. Who
          </p>
        </div>
      </div>
    </>
  );
};
