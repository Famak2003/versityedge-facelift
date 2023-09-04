// import LINE5 from "./assets/Line5.png";
// import LINE6 from "./assets/Line6.png";
// import LINE7 from "./assets/Line7.png";

import LoginModal from "./components/common/LoginModal";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/mainComponents/Main";

export function App() {
  return (
    <div className="App relative flex flex-col gap-[5rem] font-nunito text-xl">
      {/* <LoginModal /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
