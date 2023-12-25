import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages/index";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/Layout";
import RequireAuthentication from "./components/RequireAuthentication";

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl sm:gap-[3rem] md:gap-[5rem] ">
        <Header />

        <main className="content">
          <Routes>
          <Route path="/signup" element={<Signup />}></Route>
            <Route exact path="/signup2" element={<SignUp2/>}></Route>
            <Route exact path="/signup3" element={<SignUp3/>}></Route>
            <Route exact path="/login1" element={<Login1/>}></Route>
            <Route exact path="/password1" element={<Password1 />}></Route>
            <Route exact path="/password2" element={<Password2 />}></Route>
            <Route exact path="/password3" element={<Password3 />}></Route>
            <Route exact path="/congrats1" element={<Congrats1 />}></Route>
            <Route exact path="/congrats2" element={<Congrats2 />}></Route>      

            <Route path="/predictChance" element={<PredictChance />}></Route>
            <Route
              path="/predictChance/congratulation"
              element={<PredictChanceCongratulations />}
            ></Route>
            <Route
              path="/predictChance/form"
              element={<PredictChanceForm />}
            ></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blogs/post/:id" element={<Blog />}></Route>
            <Route path="/blog/create" element={<CreateBlog />}></Route>
            <Route path="/forum" element={<ForumHome />}></Route>
            <Route path="/forums/:title" element={<ForumBlog />}></Route>
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
