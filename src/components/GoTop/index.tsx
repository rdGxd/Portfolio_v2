export const GoTop = () => {
  return (
    <a
      href="#"
      className="fixed z-10 flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out delay-150 rounded opacity-50 bg-gray bottom-8 right-8 hover:bg-primary hover:-translate-y-1 hover:scale-110"
      aria-label="Go to top"
      title="Go to top"
    >
      <img src="/assets/images/Arrow.svg" alt="" />
    </a>
  );
};
