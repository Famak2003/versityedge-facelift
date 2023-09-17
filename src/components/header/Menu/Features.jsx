import ARROW from "./../../../assets/arrow.png";

export function Features({ handleFeaturesClick, isFeaturesOpen, item }) {
  return (
    <button
      onClick={handleFeaturesClick}
      className=" heroResponsiveText flex cursor-pointer items-center gap-[.5rem] "
    >
      {item.text}
      <span>
        <img
          src={ARROW}
          alt="img"
          className={`h-[full] ${!isFeaturesOpen ? "" : "rotate-180"} scale-75`}
        />
      </span>
    </button>
  );
}
