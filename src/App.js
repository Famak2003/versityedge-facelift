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

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App relative flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl lmobile:gap-[3rem] md:gap-[5rem]">
        <Header />
        <div className="content">
          <Blog />
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/predictChance">
              <PredictChance />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
          </Switch> */}
          {/* <Home /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
