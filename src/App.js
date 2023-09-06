// import LoginModal from "./components/common/LoginModal";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeMain from "./components/homeComponents/HomeMain";
import PredictChanceMain from "./components/predictChanceComponents/PredictChanceMain";

export function App() {
  return (
    <div className="App relative flex flex-col gap-[5rem] font-nunito text-xl">
      {/* <LoginModal /> */}
      <Header />
      {/* <HomeMain /> */}
      <PredictChanceMain />
      <Footer />
    </div>
  );
}

export default App;
