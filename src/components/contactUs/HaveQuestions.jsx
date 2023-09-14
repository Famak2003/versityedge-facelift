import { useState } from "react";
import Button from "../common/Button";
import LOGO from "./../../assets/versityedge-Large-Logo.png";

const forms = [
  { text: "First Name", type: "text" },
  { text: "Last Name", type: "text" },
  { text: "Phone Number", type: "tel" },
  { text: "Email", type: "email" },
];

function HaveQuestions() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    // use FormData to collect form data
    const formDataObject = new FormData(e.target);

    // Access form data by their name
    const firstname = formDataObject.get("firstname");
    const lastname = formDataObject.get("lastname");
    const phone = formDataObject.get("phonenumber");
    const email = formDataObject.get("email");
    const message = formDataObject.get("message");

    // update form data to state
    setFormData({
      firstname,
      lastname,
      phone,
      email,
      message,
    });
  };
  console.log(formData);

  return (
    <section className=" generalPadding flex flex-col gap-[2rem] ">
      <h1 className=" SliderResponsiveHeader text-center font-bold ">
        Have questions or need assistance? <br /> Feel free to reach out to us.{" "}
      </h1>
      <div className=" flex">
        <div className=" flex w-[60%] flex-col gap-[2rem] ">
          <p className="KYCResponsiveText font-semibold ">
            Have a specific query or need more information? Use the form below
            to send us a message. We'll get back to you as soon as possible.
            Before contacting us, check out our FAQs for quick answers to common
            questions?
          </p>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" flex flex-col gap-[3rem]"
          >
            {/* Upper input area */}
            <div className=" grid grid-cols-2 gap-x-[2rem] gap-y-[2rem] ">
              {forms.map((item, index) => {
                const textToLowerCase = item.text
                  .split(" ")
                  .join("")
                  .toLowerCase();
                return (
                  <div key={index} className="flex flex-col gap-[.3rem]">
                    <label
                      className="reponsiveMiniText1"
                      htmlFor={textToLowerCase}
                    >
                      {item.text}
                    </label>
                    <input
                      className=" reponsiveMiniText1 w-[85%] rounded-lg py-[.6rem] pl-[1.5rem] ring-1 ring-[#D9DADB] active:ring-black"
                      required
                      name={textToLowerCase}
                      id={textToLowerCase}
                      type={item.type}
                      placeholder={item.text}
                    />
                  </div>
                );
              })}
            </div>
            {/* TextArea */}
            <div className=" flex flex-col gap-[.3rem]">
              <label className="reponsiveMiniText1" htmlFor="message">
                {" "}
                Leave a message
              </label>
              <textarea
                className=" reponsiveMiniText1 h-[12rem] resize-none rounded-lg px-[.5rem] py-[.5rem] ring-1 ring-[#D9DADB] active:ring-black"
                id="message"
                name="message"
                placeholder="Type a text"
              ></textarea>
            </div>
            {/* Button */}
            <Button
              addstyle={"text-white py-[.4rem] reponsiveMiniText1 self-end "}
            >
              Contact us
            </Button>
          </form>
        </div>
        <div>
          <figure>
            <img src={LOGO} alt="VersityEdge" />
          </figure>
          <div className="">
            <p className="SliderResponsiveHeader">
              Email: versityedge@gmail.com
            </p>
            <p>Phone: +2348127111398</p>
            <p>
              Address: Independence hostel, University of Ibadan, Oyo, Ibadan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HaveQuestions;
