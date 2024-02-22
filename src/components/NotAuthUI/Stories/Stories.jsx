import Story from "./Story";

function Stories({ content }) {
  return (
    <ul className=" h-full flex gap-[4rem] justify-between items-center px-2 lg:px-[2rem]">
      {content.map((obj, idx) => {
        return (
          <Story key={idx} img={obj.image} text={obj.text} name={obj.stdName} />
        );
      })}
    </ul>
  );
}

export default Stories;
