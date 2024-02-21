import Story from "./Story";

function Stories({ content }) {
  return (
    <ul className=" ring-1 ring-red-400 h-full flex justify-between items-center px-[2rem]">
      {content.map((obj, idx) => {
        return (
          <Story key={idx} img={obj.image} text={obj.text} name={obj.stdName} />
        );
      })}
    </ul>
  );
}

export default Stories;
