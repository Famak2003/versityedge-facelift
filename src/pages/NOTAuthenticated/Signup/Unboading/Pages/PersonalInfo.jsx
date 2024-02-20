import { Input, Select } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import * as Hooks from "./../../../../../hooks/index";

function PersonalInfo() {
  const nav = Hooks.useNav();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    describe: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    nav("examType");
  };
  return (
    <div className=" flex p-[2rem] flex-col gap-[3rem]">
      <h1 className=" text-center font-semibold text-[2.4rem] ">
        Personal Information
      </h1>
      <form className=" flex flex-col gap-[1.2rem] justify-center items-center">
        <Input
          className="px-[1.5rem] py-[2.4rem] h-[5.6rem] text-[1.8rem] "
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, firstName: e.target.value }));
          }}
          placeholder="First Name"
        />
        <Input
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, lastName: e.target.value }));
          }}
          className="px-[1.5rem] py-[2.4rem] h-[5.6rem] text-[1.8rem] "
          placeholder="Last Name"
        />
        <Input
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, phoneNumber: e.target.value }));
          }}
          className="px-[1.5rem] py-[2.4rem] h-[5.6rem] text-[1.8rem] "
          placeholder="Phone Number"
        />
        <Select
          onChange={(value) => {
            setUserInfo((prev) => ({ ...prev, describe: value }));
          }}
          className=" h-[5.6rem] w-full text-[1.8rem]"
          placeholder="What best describes you?"
          options={[
            { value: "Calm", label: "calm" },
            { value: "agile", label: "agile" },
          ]}
        />
        <Input
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, email: e.target.value }));
          }}
          className="px-[1.5rem] py-[2.4rem] h-[5.6rem] text-[1.8rem] "
          placeholder="Email address"
        />
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          required
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, password: e.target.value }));
          }}
          className="px-[1.5rem] h-[5.6rem] text-[1.8rem] "
          placeholder="Password"
        />
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          required
          onChange={(e) => {
            setUserInfo((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }}
          className="px-[1.5rem] h-[5.6rem] text-[1.8rem] "
          placeholder="Confirm password"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="max-w-[52rem] fixed text-[var(--white)] bottom-4 active:text-[var(--black)] bg-[var(--blue)] mt-[1rem] rounded-3xl text-[1.8rem] h-[4.7rem] w-[95vw]"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
