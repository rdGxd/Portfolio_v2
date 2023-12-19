type TitlePageProps = {
  title: string;
};

export const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <div className="flex mt-[53px] ml-[205px]">
      <h1 className="text-white font-semibold text-3xl">
        <span className="text-primary">/</span>
        {title}
      </h1>
    </div>
  );
};
