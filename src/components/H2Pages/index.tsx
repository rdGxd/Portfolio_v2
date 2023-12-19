type H2PagesProps = {
  title: string;
};

export const H2Pages = ({ title }: H2PagesProps) => {
  return (
    <>
      <h1 className="text-white font-semibold text-3xl">
        <span className="text-primary">#</span>
        {title}
      </h1>
    </>
  );
};
