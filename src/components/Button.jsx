export default function Button({ children, ...props }) {
  const type =
    props.type === "main"
      ? "sm:min-w-[250px] rounded-2xl bg-green-normal py-2 sm:py-3 px-6 text-sm sm:text-lg font-medium text-white-normal transition duration-300 ease-in-out hover:bg-white-normal hover:border-green-normal hover:outline-none hover:ring-2 hover:ring-green-normal hover:text-green-normal "
      : "font-medium text-sm sm:text-lg text-green-normal hover:text-green-dark";

  return (
    <>
      <button {...props} className={type}>
        {children}
      </button>
    </>
  );
}
