import { useDispatch } from "react-redux";
import * as Components from "../../../../../components/NotAuthUI/index";
import { setExamType } from "../../../../../redux/slice/authSlice";

function ExamType() {
  const dispatch = useDispatch();

  function saveChoice(value) {
    dispatch(setExamType(value[0]));
  }

  return (
    <Components.GridSelection
      addFilter={true}
      header={"Exam type beign prepared for"}
      nextButtonPath={"examOverview"}
      callBack={saveChoice}
    />
  );
}

export default ExamType;
