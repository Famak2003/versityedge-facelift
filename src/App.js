import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/homeComponents/Home";
// import PredictChance from "./components/predictChanceComponents/PredictChance";
import Blogs from "./components/blogs/blogs";
import Blog from "./components/blogs/blogDetail";
import ForumHome from "./components/forum/forumHome";
import ContactUs from "./components/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import ForumBlog from "./components/forum/forumBlog";
import Signup from "./components/Signup/Signup";
import CreateBlog from "./components/blogs/newBlog";
import PredictChanceForm from "./components/predictChanceComponents/Forms/Forms";
import PredictChance from "./components/predictChanceComponents/PredictChance/PredictChance";
import PredictChanceCongratulations from "./components/predictChanceComponents/Congratulations/Congratulations";
// import AboutUs from "./components/aboutUs/AboutUs";
// import AboutUs from "./components/aboutUs/AboutUs";

export function App() {
  
  return (
    <>
      <ScrollToTop />
      <div className="App flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl sm:gap-[3rem] md:gap-[5rem] ">
        <Header />
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/predictChance" element={<PredictChance />}></Route>
            <Route
              path="/predictChance/congratulation"
              element={<PredictChanceCongratulations />}
            ></Route>
            <Route
              path="/predictChance/form"
              element={<PredictChanceForm />}
            ></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blog/post/:id" element={<Blog />}></Route>
            <Route path="/blog/create" element={<CreateBlog />}></Route>
            <Route path="/forum" element={<ForumHome />}></Route>
            <Route path="/forums/:title" element={<ForumBlog />}></Route>
            <Route path="/signUp" element={<Signup />}></Route>
            {/* <Route path="/about-us " element={<AboutUs />}></Route> */}
            <Route path="/blog/:id" element={<Blog />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
