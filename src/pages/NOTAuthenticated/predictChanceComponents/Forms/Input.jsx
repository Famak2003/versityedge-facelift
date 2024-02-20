// import Years from "../Year";
// import NigeriaStates from "./../Files/nigeria-states.json";
import { Select, Space } from "antd";

export default function Input({ children, comment, num, type }) {
  const universities = [
    {
      label: "university of ibadan",
      value: "university of ibadan",
    },
    {
      label: "university of lagos",
      value: "university of lagos",
    },
    {
      label: "university of akure",
      value: "university of akure",
    },
    {
      label: "ogun state university",
      value: "ogun state university",
    },
    {
      label: "osun state university",
      value: "osun state university",
    },
    {
      label: "university of ilorin",
      value: "university of ilorin",
    },
  ];

  // const courses = [
  //   {
  //     label: "math",
  //     value: "math",
  //   },
  //   {
  //     label: "eng",
  //     value: "eng",
  //   },
  //   {
  //     label: "biology",
  //     value: "biology",
  //   },
  //   {
  //     label: "physics",
  //     value: "physics",
  //   },
  //   {
  //     label: "chemistry",
  //     value: "chemistry",
  //   },
  //   {
  //     label: "literature",
  //     value: "literature",
  //   },
  //   {
  //     label: "e-commerce",
  //     value: "e-commerce",
  //   },
  // ];

  // const states = [];
  // for (let i = 0; (i = NigeriaStates.length); i++) {
  //   states.push({
  //     label: NigeriaStates[i],
  //     value: NigeriaStates[i],
  //   });
  // }

  // console.log(states);

  // const yearOfGraduation = [];
  // const Year = Years(2015);
  // for (let i = 0; i <= Year.length; i++) {
  //   yearOfGraduation.push({
  //     label: Year[i],
  //     value: Year[i],
  //   });
  // }
  // console.log(yearOfGraduation);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <li className=" w-full mobile:w-[90%]">
      <div className=" flex flex-col xlmobile:flex-row">
        <label
          className=" Text24px mr-6 block w-[90%] leading-8 xlmobile:w-[40%] md:leading-9"
          htmlFor={`input${num}`}
        >
          {children} <br />
          {comment ? (
            <small className=" xlmobile:Text16px text-[.9rem] italic leading-[.2rem] mobile:text-[1rem] mobile:leading-[.3rem] xlmobile:leading-3 md:leading-5 ">
              {comment}
            </small>
          ) : (
            ""
          )}
        </label>

        {type === "dropDown" && (
          <Space
            className=" w-full xlmobile:w-[50%] md:w-[35%]"
            // style={{
            //   width: "35%",
            // }}
            direction="vertical"
            wrap
          >
            <Select
              defaultValue="lucy"
              required
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </Space>
        )}
        {type === "multipleSelection" && (
          <Space
            className=" w-full xlmobile:w-[50%] md:w-[35%]"
            // style={{
            //   width: "35%",
            // }}
            direction="vertical"
          >
            <Select
              mode="multiple"
              required
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["university of ibadan", "university of lagos"]}
              onChange={handleChange}
              options={universities}
            />
          </Space>
        )}
        {type === "number" && (
          <input
            className=" h-[2.8rem] w-full min-w-[15rem] rounded-lg py-[.7rem] pl-[1.5rem] ring-1 ring-[#D9DADB] active:ring-black xlmobile:w-[50%] md:w-[35%] "
            type="number"
            id={`input${num}`}
            required
            max={10}
            min={0}
            name={`input${num}`}
          />
        )}
        {type === "radio" && <input type="radio" id={`input${num}`} />}
      </div>
    </li>
  );
}
