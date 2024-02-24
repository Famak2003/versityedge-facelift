export default function FooterInfo({ header, content }) {
  return (
    <dl className=" flex flex-col gap-[1rem] w-fit">
      <h2 className=" font-bold">{header}</h2>
      <dd>
        <ol className=" flex flex-col gap-[.1rem] sm:gap-[.2rem] md:gap-[.5rem]">
          {content.map((item, id) => (
            <li
              key={id}
              className=" footerList pl-[.5rem] text-[1.5rem] lmobile:text-[1.8rem]"
            >
              {item}
            </li>
          ))}
        </ol>
      </dd>
    </dl>
  );
}
