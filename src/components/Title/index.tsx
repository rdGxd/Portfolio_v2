type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <>
      <h2 className="text-white text-3xl">
        <span className="text-primary">#</span>
        {title}{" "}
      </h2>
      <span className="text-primary text-3xl ml-4">
        ----------------------------------
      </span>
    </>
  );
};
