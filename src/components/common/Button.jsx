export default function Button({ children, addstyle = " " }) {
  return (
    <button
      className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
    >
      {children}
    </button>
  );
}
