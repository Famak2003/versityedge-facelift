export default function Dropdown({ content }) {
  return (
    <ul className=" absolute left-0 flex w-fit flex-col gap-[1rem] overflow-hidden rounded-r-xl bg-[#fcfcfc] pt-[.7rem] text-[1.1rem] duration-500">
      {content.map((item, id) => (
        <li className="bb w-[19rem] px-[2rem] pb-[.5rem] " key={id}>
          {item}
        </li>
      ))}
    </ul>
  );
}
