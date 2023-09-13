import FRAME5 from "./../../../../assets/img1.png";
import FRAME6 from "./../../../../assets/img2.png";
import FRAME7 from "./../../../../assets/img4.png";
import FRAME8 from "./../../../../assets/img10.png";

// import LINE4 from "./../../../assets/Line4.png";
// import LINE5 from "./../../../assets/Line5.png";
// import LINE6 from "./../../../assets/Line7.png";
// import LINE7 from "./../../../assets/Line6.png";

import CLUSTERIMG from "./../../../../assets/ClusterImage.png";
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

        {/* Cluster image */}
        <figure className=" absolute left-[50%] top-[50%] z-[-3] translate-x-[-50%] translate-y-[-50%] smobile:h-[24rem] mobile:h-[24rem] sm:h-[27rem] md:h-[29rem] lg:h-[40rem] ">
          <img className="h-full object-contain" src={CLUSTERIMG} alt="img" />
        </figure>
      </div>
    </section>
  );
}
