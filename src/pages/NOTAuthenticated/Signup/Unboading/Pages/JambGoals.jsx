import { Input } from "antd";

function JambGoals() {
  return (
    <form className=" pb-[10rem] flex flex-col gap-[2rem]">
      <Input
        className=" text-[1.8rem] h-[5.6rem] py-[1.5rem] rounded-3xl px-[2.4rem]"
        name="target"
        placeholder="Your target UTME score"
      />
      <p className=" text-[1.8rem]">First choice of institution</p>
      <div className=" flex flex-col gap-[1rem]">
        <Input
          className=" text-[1.8rem] h-[5.6rem] py-[1.5rem] rounded-3xl px-[2.4rem]"
          name="firstInstitution"
          placeholder="Institution"
        />
        <Input
          className=" text-[1.8rem] h-[5.6rem] py-[1.5rem] rounded-3xl px-[2.4rem]"
          name="firstCourse"
          placeholder="Course"
        />
      </div>
      <p className=" text-[1.8rem]"> Second choice of institution</p>
      <div className=" flex flex-col gap-[1rem]">
        <Input
          className=" text-[1.8rem] h-[5.6rem] py-[1.5rem] rounded-3xl px-[2.4rem]"
          name="secondInstitution"
          placeholder="Institution"
        />
        <Input
          className=" text-[1.8rem] h-[5.6rem] py-[1.5rem] rounded-3xl px-[2.4rem]"
          name="secondCourse"
          placeholder="Course"
        />
      </div>
    </form>
  );
}

export default JambGoals;
