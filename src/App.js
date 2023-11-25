import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages/index";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/Layout";
import RequireAuthentication from "./components/RequireAuthentication";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Pages.Home />} />
          <Route path="/contactUs" element={<Pages.ContactUs />}></Route>
          <Route path="/auth" element={<Pages.Signup />}></Route>
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/forgotPassword" element={<Pages.ResetPassword />} />

          {/* PROTECTED ROUTES */}
          <Route element={<RequireAuthentication />}>
            <Route path="/predictChance">
              <Route index element={<Pages.PredictChance />} />
              <Route
                path="congratulation"
                element={<Pages.PredictChanceCongratulations />}
              />
              <Route path="form" element={<Pages.PredictChanceForm />} />
            </Route>
          </Route>

          <Route path="/blogs">
            <Route index element={<Pages.Blogs />} />
            <Route element={<RequireAuthentication />}>
              <Route path="post/:id" element={<Pages.BlogDetails />} />
              <Route path="create" element={<Pages.CreateBlog />} />
            </Route>
          </Route>

          <Route path="/forum">
            <Route index element={<Pages.ForumHome />} />
            <Route element={<RequireAuthentication />}>
              <Route path="forums/:title" element={<Pages.ForumBlog />} />
            </Route>
          </Route>

          <Route element={<RequireAuthentication />}>
            <Route path="/quiz">
              <Route index element={<Pages.Quiz />} />
              <Route path="mock-home" element={<Pages.MockLandingPage />} />
              <Route path="mock" element={<Pages.Mock />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
