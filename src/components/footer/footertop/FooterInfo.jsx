export default function FooterInfo({ header, content }) {
  return (
    <dl className=" flex flex-col gap-[1rem]">
      <dt className="mobile:KYCResponsiveText text-[1.2rem]">{header}</dt>
      <dd>
        <ol className=" flex flex-col gap-[.1rem] sm:gap-[.2rem] md:gap-[.5rem]">
          {content.map((item, id) => (
            <li
              key={id}
              className=" footerList mobile:reponsiveMiniText1 pl-[.5rem] text-[1rem] leading-5 "
            >
              {item}
            </li>
          ))}
        </ol>
      </dd>
    </dl>
  );
}
