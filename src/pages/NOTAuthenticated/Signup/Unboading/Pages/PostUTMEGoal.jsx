import { Input } from "antd";

function PostUTMEGoal() {
  return (
    <form className=" pb-[10rem] flex flex-col gap-[2rem]">
      <Input
        className="w-full p-[2.4rem] h-[5.6rem] text-[1.8rem] rounded-3xl"
        placeholder="Intended course of study"
      />
      <Input
        className="w-full p-[2.4rem] h-[5.6rem] text-[1.8rem] rounded-3xl"
        placeholder="Your UTME score"
      />
      <Input
        className="w-full p-[2.4rem] h-[5.6rem] text-[1.8rem] rounded-3xl"
        placeholder="Your P.UTME target score"
      />
    </form>
  );
}

export default PostUTMEGoal;
