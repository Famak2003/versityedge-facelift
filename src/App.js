import { Routes, Route } from "react-router-dom";
import { Switch } from "react-router"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/homeComponents/Home";
import PredictChance from "./components/predictChanceComponents/PredictChance";
import Blogs from "./components/blogs/blogs";
// import { Router } from "react-router-dom/cjs/react-router-dom";
import ContactUs from "./components/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./components/blogs/blogDetail";
import AboutUs from "./components/aboutUs/AboutUs";

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App max-w-[150rem] font-nunito text-xl ">
        <Header />
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/predictChance" element={<PredictChance />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/about-us " element={<AboutUs />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
