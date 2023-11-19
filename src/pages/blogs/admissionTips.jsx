import React from "react";
import "./blogs.css";
import image1 from "./../../assets/admissions1.png";
import image2 from "./../../assets/admissions2.png";
import image3 from "./../../assets/admissions3.png";
import image4 from "./../../assets/admissions4.png";
import image5 from "./../../assets/admissions5.png";
import image6 from "./../../assets/admissions6.png";

const AdmissionTip = () => {
  const admissionCards = [
    {
      image: image1,
      text: `
            Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, liksom 
            `,
      header: "Campus",
      id: 1,
    },
    {
      image: image2,
      text: `
            Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, liksom 
            `,
      header: "Campus",
      id: 2,
    },
    {
      image: image3,
      text: `
            Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, liksom 
            `,
      header: "Campus",
      id: 3,
    },
    {
      image: image4,
      text: `
            Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, liksom 
            `,
      header: "Campus",
      id: 4,
    },
    {
      image: image5,
      text: `
            Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, liksom 
            `,
      header: "Campus",
      id: 5,
    },
    {
      image: image6,
      text: `
            Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, liksom 
            `,
      header: "Campus",
      id: 6,
    },
  ];
  return (
    <div className="admissions">
      <h2>Admission Tips</h2>
      <div className="grid">
        {admissionCards &&
          admissionCards.map((admcard) => (
            <div className="admcard" key={admcard.id}>
              <img src={admcard.image} alt="" />
              <h3>{admcard.header}</h3>
              <p
                style={{
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {" "}
                {admcard.text}
              </p>
              <button className="adm-btn">Read More</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdmissionTip;
