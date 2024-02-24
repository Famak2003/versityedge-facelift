import Card from "./NewCard";

function LearnAll({ content }) {
  return (
    <ul className="flex flex-wrap justify-center gap-[4rem] md:gap-[8.1rem] items-center w-full h-fit ring-1">
      {content.map((obj, idx) => (
        <Card
          key={idx}
          img={obj.image}
          header={obj.header}
          headerWrap={true}
          btnText={obj.btnText}
        />
      ))}
    </ul>
  );
}

export default LearnAll;
