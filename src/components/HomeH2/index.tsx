type HomeH2Props = {
  title: string;
};

export const HomeH2 = ({ title }: HomeH2Props) => {
  return (
    <>
      <h2 className="text-3xl text-white">
        <span className="text-primary">#</span>
        {title}{" "}
      </h2>
      <span className="ml-4 text-3xl text-primary md:text-base sm:text-sm">
        ----------------------------------
      </span>
    </>
  );
};
