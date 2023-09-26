import "./Footer.css";
import FooterButtom from "./FooterButtom";
import FooterTop from "./FooterTop/FooterTopComp";

export const footerContent = [
  {
    header: "Company",
    content: [
      "About us",
      "Contact us",
      "Partner with us",
      "Become a Student Ambassador",
    ],
  },
  {
    header: "Our Product",
    content: [
      "AI Admission Adviser",
      "Know Your Chances",
      "Analyse Your Weakness",
      "Virtual Learning",
      "Career Guidance Constitution",
      "Join Student Community",
    ],
  },
  {
    header: "Our Products",
    content: [
      "UTME AT A GO",
      "UTME to University",
      "VersityEdge for Greater Impact",
      "Know Your Career Path",
    ],
  },
  {
    header: "Resources",
    content: ["Help Center", "Privacy Policy", "Term of Use"],
  },
];

export default function Footer() {
  return (
    <footer className=" flex h-fit flex-col gap-[3rem] bg-[#46A2FE] px-[2rem] py-[1rem] sm:px-[3rem] sm:py-[3rem] lg:px-[5rem] lg:py-[5rem]">
      <FooterTop />
      <FooterButtom />
    </footer>
  );
}
