// const LoopPartners = [PARTNER6, PARTNER7, PARTNER8, PARTNER9, PARTNER10];
export default function PartnerElements({ img }) {
  return (
    <img
      src={img}
      className=" mx-[2rem] inline-block h-full object-contain sm:mx-[3rem] md:mx-[4rem] "
      alt="img"
    />
  );
}
