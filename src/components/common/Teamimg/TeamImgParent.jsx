import TeamImg from "./TeamImg";

function TeamImgParent({ idx, content }) {
  return (
    <li
      key={idx}
      className=" flex w-full items-center justify-start gap-[.5rem] smobile:gap-[1rem] mobile:gap-[1.5rem] sm:gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem]"
    >
      {content.map((item, idx) => {
        return (
          <TeamImg
            key={idx}
            img={item.img}
            title={item.title}
            name={item.name}
            experience={item.experience}
            idx={content.length % (idx + 1)}
          />
        );
      })}
    </li>
  );
}
export default TeamImgParent;
