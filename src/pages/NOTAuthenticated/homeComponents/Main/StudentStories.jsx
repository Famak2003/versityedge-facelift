import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";
import storyContent from "../../../../data/storyContent";
// import STD1 from "./../../../../assets/student1.png";
// import STD2 from "./../../../../assets/student2.png";

// const storyContent = [
//   [
//     {
//       image: STD1,
//       text: "How VersityEdge helped Adewunmi got admission into the University of Ibadan with the right materials and proper guidance.",
//       stdName: "Adewumi Ojo",
//     },
//     {
//       image: STD2,
//       text: "Bövobere jusa medan lamirat selogi. Juska Spere bebögisk. Berat prorad ped,  divis. Deciskapet speda sesk. Polysesm right Dälingar sajubuling, syktig, exosam. ",
//       stdName: "Wale Clole",
//     },
//   ],
//   [
//     {
//       image: STD1,
//       text: "How VersityEdge helped Adewunmi got admission into the University of Ibadan with the right materials and proper guidance.",
//       stdName: "Adewumi Ojo",
//     },
//     {
//       image: STD2,
//       text: "Bövobere jusa medan lamirat selogi. Juska Spere bebögisk. Berat prorad ped,  divis. Deciskapet speda sesk. Polysesm right Dälingar sajubuling, syktig, exosam. ",
//       stdName: "Wale Clole",
//     },
//   ],
//   [
//     {
//       image: STD1,
//       text: "How VersityEdge helped Adewunmi got admission into the University of Ibadan with the right materials and proper guidance.",
//       stdName: "Adewumi Ojo",
//     },
//     {
//       image: STD2,
//       text: "Bövobere jusa medan lamirat selogi. Juska Spere bebögisk. Berat prorad ped,  divis. Deciskapet speda sesk. Polysesm right Dälingar sajubuling, syktig, exosam. ",
//       stdName: "Wale Clole",
//     },
//   ],
// ];

// function Story({ img, text, name }) {
//   return (
//     <li className=" relative flex flex-col justify-start items-center w-fit px-[5.6rem]  pt-[6rem] rounded-3xl h-fit py-[3rem] shadow-[0px_20px_40px_0px_rgba(176,176,176,0.25)] ">
//       <figure className=" absolute top-[-5rem] right-[50%] translate-x-[50%] h-[10.5rem] w-[10.5rem]">
//         <img
//           className=" object-contain h-full w-full"
//           src={img}
//           alt="students"
//         />
//       </figure>
//       <div className=" text-center w-[39rem]">
//         <p>{text}</p>
//         <div className=" flex justify-between">
//           <h2 className=" font-semibold">{`~${name}`}</h2>
//           <h2 className=" text-[var(--blue)] cursor-pointer">See more</h2>
//         </div>
//       </div>
//     </li>
//   );
// }

// function Stories() {
//   return (
//     <ul className=" flex justify-between items-center px-[2rem]">
//       {storyContent.map((obj, idx) => {
//         return (
//           <Story key={idx} img={obj.image} text={obj.text} name={obj.stdName} />
//         );
//       })}
//     </ul>
//   );
// }

function StudentStories() {
  return (
    <section className=" generalPadding flex flex-col h-[82rem] gap-[18.4rem]">
      <h1 className=" text-center ">Our Student's Stories</h1>
      <div className=" flex justify-center items-center h-[50rem] ring-1">
        {
          <GalleryCarousel
            controls={"top"}
            type="studentStories"
            carouselData={storyContent}
          />
        }
      </div>
      {/* <Stories /> */}
    </section>
  );
}

export default StudentStories;
