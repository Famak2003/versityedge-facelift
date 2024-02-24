import HAVEQUESTION from "./../assets/haveQuestions.png";
import BLACKPHONE from "./../assets/black-border-phone.png";
import WHAtSAPP from "./../assets/whatsapp-icon.png";

const callnWhatsappInfo = [
  { header: "Call us", icon: BLACKPHONE, number: "+2341234567890" },
  { header: "WhatsApp", icon: WHAtSAPP, number: "+2341234567890" },
];
const haveAnyQuestion = {
  image: HAVEQUESTION,
  header: "Have any questions?",
  text: "Our friendly customer support team is more than ready to kick off a conversation aimed at ensuring your successful admission journey.",
  callnWhatsappInfo,
  flip: true,
  type: "customerCare",
};

export default haveAnyQuestion;
