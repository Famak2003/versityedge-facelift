import * as Components from "../../../../../components/NotAuthUI/index";

function JambCombination() {
  return (
    <Components.GridSelection
      buttonText={"Start Preparating"}
      header={"Select your UTME combination"}
      backButtonPath={"goals"}
      dataSelection="multiple"
      nextButtonPath={"/dashboard"}
    />
  );
}

export default JambCombination;
