type TitlePageProps = {
  title: string;
};

export const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <div className="flex mt-[53px] ml-[205px] lg:ml-40">
      <h1 className="text-3xl font-semibold text-white">
        <span className="text-primary">/</span>
        {title}
      </h1>
    </div>
  );
};
