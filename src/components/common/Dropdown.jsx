import { Link } from "react-router-dom";

export default function Dropdown({ content }) {
  return (
    <ul
      style={{
        boxShadow:
          "0px 21.91819953918457px 43.83639907836914px 0px rgba(180, 180, 180, 0.25)",
      }}
      className=" absolute left-0 z-[40] flex w-fit flex-col gap-[1rem] overflow-hidden rounded-r-xl bg-[#fcfcfc] pt-[.7rem] text-[1.1rem]
    duration-500 "
    >
      {content.map((item, id) => (
        <li
          className="bb mobile:reponsiveMiniText1 w-[15rem] px-[2rem] pb-[.5rem] text-[1rem] leading-5 sm:w-[17rem] md:w-[19rem] lg:w-[22rem] xl:w-[25rem] "
          key={id}
        >
          <Link to={`/${item.link}`}>{item.content}</Link>
        </li>
      ))}
    </ul>
  );
}
