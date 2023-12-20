export const GoTop = () => {
  return (
    <a
      href="/"
      className="fixed flex bg-gray items-center justify-center w-10 h-10 bottom-8 right-8 opacity-50 z-10 rounded"
      aria-label="Go to top"
      title="Go to top"
    >
      <img src="../../public/Arrow.svg" alt="" />
    </a>
  );
};
