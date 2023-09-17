import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/homeComponents/Home";
import PredictChance from "./components/predictChanceComponents/PredictChance";
import ContactUs from "./components/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App relative flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl lmobile:gap-[3rem] md:gap-[5rem]">
        <Header />
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/predictChance" element={<PredictChance />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
