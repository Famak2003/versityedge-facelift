import IMG from "./../../../assets/whatQuizCanDo 1.png";

import Carousel from "./../../../components/carousel/Carousel";

const content = [
  {
    image: [IMG],
    header: "Discover your starting point",
    headerPaintedText: "Discover your starting point",
    btnText: "Know your starting point",
    content:
      "Know your strengths and areas for improvement. Our diagnostic test provides a personalized analysis of your knowledge, helping you create a targeted study plan. Benefit from insights into your current level, tailor your presentation, and optimize your success.",
  },
  {
    image: [IMG],
    header: "Simulate the real UTME",
    headerPaintedText: "Simulate the real UTME",
    btnText: "Prepare like a Pro",
    content:
      "Prepare for UTME with our comprehensive practice tests. These quizzes closely resemble the actual UTME format, allowing you to familiarize yourself with the exam structure, types of questions and time constraints.",
  },
  {
    image: [IMG],
    header:
      "Experience your prospective Institution’s Post UTME exam or screening",
    headerPaintedText:
      "Experience your prospective Institution’s Post UTME exam or screening",
    btnText: "Experience your Institution’s exam",
    content:
      "Whether you want UNILORIN or FUOYE, our institution based mock exams replicate the specific admission test patterns of your chosen institution. Gain an advantage by practicing Institution-specific questions, get accustomed to their patterns, and boost your chances of scoring well.",
  },
  {
    image: [IMG],
    header: "Ace your O’level with confidence",
    headerPaintedText: "Ace your O’level with confidence",
    btnText: "Ace your O’level",
    content:
      "Our O’level mock exams prepare you for your secondary school final exams. Test your understanding of core subjects and strengthen your foundation for success. Reinforce your knowledge, identify gaps in your learning, and feel more self assured when taking your O’level exams.",
  },
  {
    image: [IMG],
    header: "Subject spotlight",
    headerPaintedText: "Subject spotlight",
    btnText: "Master your subjects",
    content:
      "Our subject spotlight quizzes focus on individual subjects, allowing you to dive deep into particular topics, strengthen your grasp on subjects that need extra attention.",
  },
  {
    image: [IMG],
    header: "Topic Mastering Checkpoint",
    headerPaintedText: "Topic Mastering Checkpoint",
    btnText: "Master your subjects",
    content:
      "Our top mastering checkpoints quizzes assess your understanding of specific topic within subjects. Identify areas of strength and areas that need further study, ensuring comprehensive preparation, and become well-versed in all subjects’ key topics.",
  },
];

export default function WhatQuizCanDo({ HandleIsVisible }) {
  return (
    <section
      className={` generalPadding relative flex h-fit flex-col items-center gap-[2rem] py-[3rem]`}
    >
      <h1 className="SliderResponsiveHeader font-bold">What quiz can do</h1>
      <Carousel carouselData={content} />
    </section>
  );
}
