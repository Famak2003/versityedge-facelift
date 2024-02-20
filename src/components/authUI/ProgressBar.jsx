function ProgressBar({ percentage, color, height }) {
  const filledPercentage = `${percentage}%`;

  const divStyle = {
    height,
  };

  const hrStyle = {
    width: filledPercentage,
    backgroundColor: color,
    border: "none",
  };

  return (
    <div
      style={divStyle}
      className={` w-full bg-[var(--lightgray)] rounded-3xl overflow-hidden ring-[var(--gray)]`}
    >
      <hr className={` h-full `} style={hrStyle} />
    </div>
  );
}

export default ProgressBar;
