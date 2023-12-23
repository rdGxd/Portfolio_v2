type H2PagesProps = {
  title: string;
};

export const H2Pages = ({ title }: H2PagesProps) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white ">
        <span className="text-primary">#</span>
        {title}
      </h1>
    </>
  );
};
