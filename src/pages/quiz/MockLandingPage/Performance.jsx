import Button from "../../../components/common/Button";
import ARROW from "./../../../assets/arrow.png";
import ColoredText from "../../../components/common/ColoredText";
import { useEffect, useRef, useState } from "react";

const content = [
  { subject: "English" },
  { subject: "Biology" },
  { subject: "Physics" },
  { subject: "Chemistry" },
];

function Performance() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef();

  function View() {
    setAccordionOpen(!accordionOpen);
  }

  useEffect(function () {
    let handler = (e) => {
      if (!accordion.current.contains(e.target)) setAccordionOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <section className=" generalPadding flex flex-col gap-[2rem] sm:gap-[5rem]">
      <h1 className=" text-center responsiveHeader font-bold">
        Performance analysis
      </h1>
      <div className=" flex justify-between items-center">
        {/* Left */}
        <div className=" w-[45%] flex flex-col gap-[2rem]">
          <div className=" flex justify-between">
            <Button addstyle="Text16px py-[.7rem] text-[var(--blue-texture)] px-[.4rem] bg-[white] ring-1 ring-[var(--blue-texture)]">
              Strength
            </Button>
            <Button addstyle="Text16px py-[.7rem] px-[.4rem] text-[white]">
              Weakness
            </Button>
          </div>
          <ul>
            {content.map((obj, idx) => (
              <li
                onClick={View}
                ref={accordion}
                key={idx}
                className=" flex pb-3 justify-between items-center Text24px border-b border-b-[var(--gray-texture)]"
              >
                <p>{obj.subject}</p>
                <span className="">
                  <img
                    className={`h-[full] transition-all duration-500  ${
                      !accordionOpen ? "" : "rotate-180"
                    } scale-75`}
                    src={ARROW}
                    alt="img"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right */}
        <div className=" w-[51%] mobile:w-[45%] gap-[.5rem] mobile:gap-[1rem] flex flex-col rounded-[3rem] pt-[1.5rem] pb-[1rem] mobile:py-[2rem] px-[1.5rem] mobile:px-[2.5rem] shadow-carousel-button-shadow">
          <h2 className="responsiveText">
            {
              <ColoredText
                colorWords={"Turn your weakness into strenght"}
                text={"Turn your weakness into strenght"}
              />
            }
          </h2>
          <p className=" Text16px">
            VersityEdge gets a cool study space for group of students ade epid
            om neck homot ponade. Mabenat bätuhås om än Travis naskapet inte
            gigare, fulparkerare varose. Rekoring vönyrade, ber. Preda arade
            antevare penyliga son. kontrar speren grafen. Benat den ade epid om
            neck homot ponade. Mabenat bätuhås om än Travis naskapet inte
            gigare, fulparkerare varose. Rekoring vönyrade, ber. Preda arade
            antevare penyliga son. kontrar speren grafen. Benat den ade epid om
            neck homot ponade. Travis naskapet inte gigare, fulparkerare varose.
            Rekoring
          </p>
          <div className=" self-end">
            <Button addstyle=" Text16px py-[.7rem] mobile:py-[1rem] text-[white] ">
              Click Here
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
