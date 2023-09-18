import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/homeComponents/Home";
import PredictChance from "./components/predictChanceComponents/PredictChance";
<<<<<<< HEAD
import Blogs from "./components/blogs/blogs";
// import { Router } from "react-router-dom/cjs/react-router-dom";
=======
import ContactUs from "./components/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
>>>>>>> dd0172068e9a9be7df316f43a31133f9ab6347d6

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App relative flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl lmobile:gap-[3rem] md:gap-[5rem]">
        <Header />
<<<<<<< HEAD
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/predictChance">
              <PredictChance />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
          </Switch>
          {/* <Home /> */}
        </div>
=======
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/predictChance" element={<PredictChance />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
          </Routes>
        </main>

>>>>>>> dd0172068e9a9be7df316f43a31133f9ab6347d6
        <Footer />
      </div>
    </>
  );
}

export default App;
