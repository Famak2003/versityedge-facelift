import "./HaveQuestions.css";

import { useState } from "react";
import Button from "../../common/Button";
import LOGO from "./../../../assets/Logowithripple.png";
// import RIPPLE from "./../../../assets/Ripple.png";

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

  return (
    <section className="haveQuestion generalPadding flex flex-col gap-[2rem] ">
      <h1 className=" mobile:SliderResponsiveHeader text-center text-[1.5rem] font-bold ">
        Have questions or need assistance? <br /> Feel free to reach out to us.{" "}
      </h1>
      <div className=" ml-auto mr-auto flex gap-[2rem] xs:flex-col md:flex-row">
        <div className="right flex w-full flex-col gap-[1.5rem] px-10 mobile:px-5 md:w-[70%] ">
          <p className="KYCResponsiveText hidden font-semibold lmobile:block ">
            Have a specific query or need more information? Use the form below
            to send us a message. We'll get back to you as soon as possible.
            Before contacting us, check out our FAQs for quick answers to common
            questions?
          </p>
          {/* Form */}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" flex flex-col gap-[3rem]"
          >
            {/* Upper input area */}
            <div className=" grid grid-cols-1 gap-x-[2rem] gap-y-[2rem] md:grid-cols-2 ">
              {forms.map((item, index) => {
                const textToLowerCase = item.text
                  .split(" ")
                  .join("")
                  .toLowerCase();
                return (
                  <div
                    key={index}
                    className="ml-auto mr-auto flex w-full flex-col gap-[.3rem]"
                  >
                    <label
                      className=" mobile:reponsiveMiniText1 w-full text-[1rem]"
                      htmlFor={textToLowerCase}
                    >
                      {item.text}
                    </label>
                    <input
                      className=" mobile:reponsiveMiniText1 w-full rounded-lg py-[.7rem] pl-[1.5rem] text-[1rem] ring-1 ring-[#D9DADB] active:ring-black"
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
            <div className=" flex w-full flex-col gap-[.3rem]">
              <label
                className=" mobile:reponsiveMiniText1 w-full text-[1rem]"
                htmlFor="message"
              >
                Leave a message
              </label>
              <textarea
                className=" mobile:reponsiveMiniText1 h-[13rem] w-full resize-none rounded-lg px-[.5rem] py-[.5rem] text-[1rem] ring-1 ring-[#D9DADB] active:ring-black"
                id="message"
                name="message"
                placeholder="Type a text"
              ></textarea>
            </div>
            {/* Button */}
            <Button
              addstyle={
                "text-white py-[.4rem] text-[1rem] mobile:reponsiveMiniText1 self-center md:self-end "
              }
            >
              Contact us
            </Button>
          </form>
        </div>
        <div className="left flex flex-col items-center gap-[12rem] pt-[5rem] mobile:px-[3rem] md:w-[30%]">
          <figure className=" hidden h-[12rem] w-[12rem] items-center justify-center rounded-full bg-white shadow-[0px_10.743005752563477px_21.486011505126953px_0px_rgba(180,180,180,0.25)] lmobile:h-[14rem] lmobile:w-[14rem] sm:h-[16rem] sm:w-[16rem] md:flex md:h-[18rem] md:w-[18rem] lg:h-[20rem] lg:w-[20rem] ">
            <img src={LOGO} className=" scale-[260%]" alt="VersityEdge" />
          </figure>
          <div className=" mobile:KYCResponsiveText grid grid-cols-2 flex-col gap-x-[2rem] text-[1.1rem] md:flex">
            <p className=" ">Email: versityedge@gmail.com</p>
            <p className=" order-3 md:order-2">Phone: +2348127111398</p>
            <p className=" order-2 md:order-3">
              Address: Independence hostel, University of Ibadan, Oyo, Ibadan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HaveQuestions;
