import Input from "./Input";
import NigeriaStates from "./../Files/nigeria-states.json";

const formContent = [
  {
    label: "Please list the tertiary institutions you are interested in",
    input: "text",
  },
  { label: "Please list the courses you are interested in", input: "text" },
  {
    label: "State of origin",
    comment:
      '"knowing your state of origin helps us account for any state-based admission quotas"',
    input: "select",
    content: NigeriaStates,
  },
  {
    label: "Are You Currently in Secondary School or Have You Graduated?",
    comment:
      '"Please select the option that best describes your current educational status"',
    input: "select",
  },
  {
    label: "Year of Graduation or Expected Graduation:",
    comment:
      '"We want to understand your education timeline. Enter the year you graduated from or expect to geaduate from secondary school"',
    input: "select",
  },
  {
    label: "Study Hours:",
    comment:
      '"On average, how many hours do you dedicate to studying or preparing for your upcoming exams per week?"',
    input: "select",
  },
  {
    label: "Secondary School Type",
    comment: '"Did you attend a private or public secondary school?"',
    input: "select",
  },
  {
    label: "Academic Reputation Rating",
    comment:
      '"On a scale of 1 to 10, how would you rate your academic reputation in your current or last secondary school?"',
    input: "number",
  },
];

function DemographicsPreference() {
  return (
    <div className=" w-full ">
      <ul className=" flex w-full list-disc flex-col gap-[3rem]">
        {formContent.map((obj, index) => (
          <Input
            key={index}
            num={index}
            comment={obj.comment}
            content={obj.content}
            input={obj.input}
          >
            {obj.label}
          </Input>
        ))}
      </ul>
    </div>
  );
}

export default DemographicsPreference;
