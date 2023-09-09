// import LoginModal from "./components/common/LoginModal";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/homeComponents/Home";
import PredictChance from "./components/predictChanceComponents/PredictChance";

export function App() {
  return (
    <div className="App relative flex flex-col gap-[5rem] font-nunito text-xl">
      {/* <LoginModal /> */}
      <Header />
      {/* <Home /> */}
      <PredictChance />
      <Footer />
    </div>
  );
}

export default App;
