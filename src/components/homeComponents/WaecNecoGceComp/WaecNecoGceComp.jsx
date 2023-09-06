import FRAME5 from "./../../../assets/img1.png";
import FRAME6 from "./../../../assets/img2.png";
import FRAME7 from "./../../../assets/img4.png";
import FRAME8 from "./../../../assets/img10.png";

// import LINE4 from "./../../../assets/Line4.png";
// import LINE5 from "./../../../assets/Line5.png";
// import LINE6 from "./../../../assets/Line7.png";
// import LINE7 from "./../../../assets/Line6.png";

import CLUSTERIMG from "./../../../assets/ClusterImage.png";
import WaecNecoGceElement from "./WaecNecoGceElement";
import ConnectedLine from "./ConnectedLine";

const content = [
  {
    image: FRAME5,
    text: "Each stage is a crucial step towards your destination. VersityEdge's comprehesive solutions support you in each phase, from strengthening your foundation to realizing your academic dreams",
    style: " left-[1rem] left-[7%] top-[8%]",
  },
  {
    image: FRAME6,
    text: "Strategically prepare with VersityEdge's AI-powered practice tests, tailored to your strengths and weaknesses. Score high in the UTME, paving the way to your desired institution",
    style: " right-2 mobile:right-[6%] top-[5%] mobile:top-[1%]",
  },
  {
    image: FRAME7,
    text: "Allow VersityEdge to be your partner throughout, providing insights, support, and resouces to position you as a ideal candidate for admission.",
    style: " bottom-[8%] left-[1%] bottom-[8%] ",
  },
  {
    image: FRAME8,
    text: "Know your chance. Conquer your dream school's Post UTME with precision. Secure a spot among the best.",
    style: " bottom-[5%] right-0",
  },
];

export default function WaecNecoGceComp() {
  return (
    <section className=" flex justify-center py-[4rem] xs:h-[30rem] smobile:h-[36rem] mobile:h-[41rem] sm:h-[48rem] md:h-[58rem] lg:h-[68rem]">
      <div className=" relative h-full w-[138rem]">
        {/* Cards */}
        {content.map((item, id) => (
          <WaecNecoGceElement key={id} img={item.image} addStyle={item.style}>
            {item.text}
          </WaecNecoGceElement>
        ))}
        <ConnectedLine />
        {/* Linked Text */}
        {/* <h1 className=" wn absolute left-[50%] top-[2%] translate-x-[-50%] text-center mobile:top-0 ">
          WAEC/NECO/GCE
        </h1>
        <h1 className=" wn absolute left-[4%] top-[50%] translate-y-[-50%] mobile:left-[8%] md:left-[10%] lg:left-[8%]">
          Admission
        </h1>
        <h1 className=" wn absolute bottom-[1rem] left-[50%] translate-x-[-50%] mobile:bottom-[2rem] ">
          Post Utme
        </h1>
        <h1 className=" wn absolute right-[3%] top-[50%] translate-x-[-50%] lmobile:right-[4%] md:right-[5%] Lmd:right-[8%] lg:right-[10%] ">
          UTME
        </h1>

        {/* Lines */}
        {/*<figure className=" absolute hidden h-fit w-fit translate-x-[-50%] rotate-[-2deg] smobile:left-[20%] smobile:top-[-32%] smobile:block ss:left-[22%] ss:top-[-37%] mobile:left-[22%] mobile:top-[-30%] mobile:rotate-[-2deg] lmobile:left-[24%] lmobile:top-[-29%] lmobile:rotate-[1deg] sm:left-[25%] sm:top-[-29%] sm:rotate-[8deg] md:left-[26%] md:top-[-20%] Lmd:left-[28%] Lmd:top-[-18%] lg:left-[25%] lg:top-[-13%] semiLarge:left-[26%] semiLarge:top-[-11%] semiLarge:rotate-[12deg] xl:left-[28%]">
          <img
            className="   z-[-1] h-[40%] scale-[30%] mobile:scale-[34%] lmobile:scale-[39%] sm:scale-[44%] md:scale-[52%] Lmd:scale-[57%] lg:scale-[65%] semiLarge:scale-75   "
            src={LINE4}
            alt="line"
          />
        </figure>
        <figure className=" absolute hidden h-fit w-fit rotate-[8deg] smobile:right-[-33%] smobile:top-[-40%] smobile:block mobile:right-[-22%] mobile:top-[-29%] lmobile:right-[-15%] sm:right-[-6%] sm:top-[-27%] sm:rotate-[2deg] md:right-0 md:top-[-17%] md:rotate-[-1deg] Lmd:right-[5%] Lmd:top-[-15%] lg:right-[8%] lg:top-[-10%]  semiLarge:right-[10%] semiLarge:top-[-8%] semiLarge:rotate-[-2deg] xl:right-[13%] ">
          <img
            className="   z-[-1] h-[40%] scale-[28%] mobile:scale-[32%] sm:scale-[40%] md:scale-[52%] Lmd:scale-[57%] lg:scale-[65%] semiLarge:scale-75   "
            src={LINE5}
            alt="line"
          />
        </figure>
        <figure className=" absolute hidden h-fit w-fit translate-x-[-50%] rotate-[-6deg] smobile:bottom-[-29%] smobile:left-[23%] smobile:block ss:bottom-[-26%] ss:left-[23%] mobile:bottom-[-22%] mobile:left-[23%] lmobile:bottom-[-22%] lmobile:left-[25%] sm:bottom-[-22%] sm:left-[26%] sm:rotate-[-7deg] md:bottom-[-16%] md:left-[27%] md:rotate-[-8deg] Lmd:bottom-[-14%] Lmd:left-[29%] lg:bottom-[-9%] lg:left-[25%] semiLarge:bottom-[-7%] semiLarge:left-[26%] xl:left-[28%] ">
          <img
            className="   Lmdscale-[57%] z-[-1] h-[40%] scale-[34%] lmobile:scale-[39%] sm:scale-[44%] md:scale-[52%] lg:scale-[65%] semiLarge:scale-[72%]   "
            src={LINE6}
            alt="line"
          />
        </figure>
        <figure className=" absolute hidden h-fit w-fit rotate-[15%] smobile:bottom-[-42%] smobile:right-[-35%] smobile:block mobile:bottom-[-27%] mobile:right-[-26%] lmobile:right-[-15%] sm:bottom-[-25%] sm:right-[-6%] sm:rotate-[6deg] md:bottom-[-16%] md:right-0 Lmd:bottom-[-14%] Lmd:right-[5%] lg:bottom-[-10%] lg:right-[8%] semiLarge:right-[10%] xl:right-[13%] ">
          <img
            className="   z-[-1] h-[40%] scale-[25%] mobile:scale-[32%] sm:scale-[40%] md:scale-[50%] Lmd:scale-[58%] lg:scale-[62%] semiLarge:scale-[72%]   "
            src={LINE7}
            alt="line"
          />
        </figure>{" "}
        */}
        {/* Cluster image */}
        <figure className=" absolute left-[50%] top-[50%] z-[-3] translate-x-[-50%] translate-y-[-50%] smobile:h-[24rem] mobile:h-[24rem] sm:h-[27rem] md:h-[29rem] lg:h-[40rem] ">
          <img className="h-full object-contain" src={CLUSTERIMG} alt="img" />
        </figure>
      </div>
    </section>
  );
}
