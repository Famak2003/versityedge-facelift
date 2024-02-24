import SENDICON from "./../../assets/send-icon.png";

export default function Email() {
  return (
    <form className="flex lmobile:w-[80%] items-center justify-between rounded-[3rem] lmobile:rounded-[2rem] bg-[var(--white)] mobile:w-full h-[7rem] py-[2rem] px-[2rem] lmobile:px-[1rem] ring-1 ring-[var(lightGray)] ">
      <input
        type="email"
        required
        className=" float-left w-[70%] bg-transparent text-[var(--gray)] focus:outline-none text-[1.6rem] "
        placeholder="versityedge@gmail.com"
      />
      {/* send button */}
      <button
        type="submit"
        className=" float-right flex items-center justify-center rounded-[2rem] lmobile:rounded-[1.6rem] bg-[var(--blue)] duration-500 hover:bg-[var(--lightBlue)] px-[2rem] lmobile:px-[1rem] py-[.5rem] text-[2rem] text-[var(--white)]  "
      >
        <span>
          <img
            className=" h-[2rem] object-contain mr-[1rem]"
            src={SENDICON}
            alt="send"
          />
        </span>
        Send
      </button>
    </form>
  );
}
