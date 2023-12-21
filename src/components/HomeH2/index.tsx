type HomeH2Props = {
  title: string;
};

export const HomeH2 = ({ title }: HomeH2Props) => {
  return (
    <>
      <h2 className="text-white text-3xl">
        <span className="text-primary">#</span>
        {title}{" "}
      </h2>
      <span className="text-primary text-3xl ml-4 md:text-base">
        ----------------------------------
      </span>
    </>
  );
};
