export const First = () => {
  return (
    <article>
      <div className="flex justify-center md:flex-wrap">
        <div className="mt-16 w-[537px]">
          <h1 className="text-white font-semibold text-[32px] ">
            Rodrigo is a <span className="text-primary">web designer</span> and{" "}
            <span className="text-primary ">front-end developer</span>
          </h1>
          <p className="mt-8 text-base text-gray">
            He crafts responsive websites where technologies meet creativity
          </p>
          <a
            href="mailto:rodriigo.hora@outlook.com.br"
            className="flex items-center justify-center h-10 mt-5 text-base font-medium text-white border rounded-xl w-36 border-primary"
          >
            Contact me!!
          </a>
        </div>
        <div className="w-[469px] ml-6">
          <img src="/assets/images/ImageHome.svg" alt="" />
          <div className="flex items-center p-2 ml-6 border border-white rounded">
            <span className="w-4 h-4 border bg-primary border-primary " />
            <p className="text-gray ml-[10px]">
              Currently working on <span className="text-white">Portfolio</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div>
          <blockquote className="flex justify-center p-8 text-white mt-28 border border-gray w-[712px] ">
            <q className="text-xl font-medium">
              With great power comes great electricity bill
            </q>
          </blockquote>
          <p className="text-white font-normal text-2xl border-l border-r border-b border-gray flex w-40 p-2 ml-[552px]">
            - Dr. Who
          </p>
        </div>
      </div>
    </article>
  );
};
