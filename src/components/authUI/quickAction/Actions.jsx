function Actions({ obj, idx }) {
  return (
    <div>
      <li
        key={idx}
        className=" cursor-pointer w-fit justify-center items-center h-[9rem] gap-2 flex flex-col "
      >
        <figure className=" ring-1 ring-[var(--lightgray)] rounded-3xl min-w-[3rem] w-[5rem] lmobile:min-w-[5rem] mobile:w-[7rem] min-h-[3rem] h-[5rem] lmobile:min-h-[5rem] mobile:h-[7rem] flex justify-center items-center shadow-[0px_20px_40px_0px_rgba(176,176,176,0.25)]">
          <img
            className=" object-contain w-[4rem] lmobile:w-fit"
            key={idx}
            src={obj.img}
            alt={obj.name}
          />
        </figure>
        <figcaption className=" text-[1rem] smobile:text-[1.2rem] text-[var(--blue)] font-semibold">
          {obj.name}
        </figcaption>
      </li>
    </div>
  );
}

export default Actions;
