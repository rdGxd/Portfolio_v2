type TitlePageProps = {
  title: string;
};

export const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <div className="flex mt-[53px] ml-[205px] xl:ml-40 lg:ml-32 md:ml-20 sm:ml-20">
      <h1 className="text-3xl font-semibold text-white">
        <span className="text-primary">/</span>
        {title}
      </h1>
    </div>
  );
};
