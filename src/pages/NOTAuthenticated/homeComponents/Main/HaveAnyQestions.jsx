import TextnImageDisplay from "../../../../components/NotAuthUI/TextnImageDisplay";
import haveAnyQuestion from "../../../../data/HaveAnyQuestionsContent";

function HaveAnyQestions() {
  return (
    <section className=" flex flex-col generalPadding py-[5rem]">
      <div className="h-[71rem] lmobile:h-full">
        <TextnImageDisplay content={haveAnyQuestion} />
      </div>
    </section>
  );
}

export default HaveAnyQestions;
