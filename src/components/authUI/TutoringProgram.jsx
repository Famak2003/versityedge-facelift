function TurtoringProgram({ tutoringContent }) {
  return (
    <div className="flex w-full">
      {tutoringContent.map((obj, idx) => (
        <ul
          key={idx}
          className=" w-full flex gap-4 flex-col justify-center items-start"
        >
          <h2 className=" text-center pb-2 whitespace-nowrap Text20px text-[var(--blue)] font-semibold">
            {obj.head}
          </h2>
          <li className="w-full pt-2 h-[3rem] Text16px">{obj.row1}</li>
          <li className="w-full h-[3rem] Text16px">{obj.row2}</li>
        </ul>
      ))}
    </div>
  );
}

export default TurtoringProgram;
