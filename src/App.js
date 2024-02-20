import { Routes, Route } from "react-router-dom";

import * as NotAuthPages from "./pages/NOTAuthenticated/index";
import * as AuthPages from "./pages/Authenticated/index";

import * as Utility from "./Utility/index";

import AuthenticatedLayout from "./components/AuthenticatedLayout";
import NotAuthenticatedLayout from "./components/NotAuthenticatedLayout";
import RequireAuthentication from "./components/RequireAuthentication";
import { AnimatePresence } from "framer-motion";

export function App() {
  return (
    <>
      <Utility.ScrollToTop />
      <Utility.Logout />
      <AnimatePresence mode="wait">
        <Routes>
          {/* // Public Routes // */}
          <Route path="/" element={<NotAuthenticatedLayout />}>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<NotAuthPages.Home />} />
            <Route path="/contactUs" element={<NotAuthPages.ContactUs />} />

            {/* PROTECTED ROUTES */}
            <Route element={<RequireAuthentication />}>
              <Route path="/predictChance">
                <Route index element={<NotAuthPages.PredictChance />} />
                <Route
                  path="congratulation"
                  element={<NotAuthPages.PredictChanceCongratulations />}
                />
                <Route
                  path="form"
                  element={<NotAuthPages.PredictChanceForm />}
                />
              </Route>
            </Route>

            <Route path="/blogs">
              <Route index element={<NotAuthPages.Blogs />} />
              <Route path="post/:id" element={<NotAuthPages.BlogDetails />} />
              <Route path="create" element={<NotAuthPages.CreateBlog />} />
            </Route>

            <Route path="/forum">
              <Route index element={<NotAuthPages.ForumHome />} />
              <Route
                path="forums/:title"
                element={<NotAuthPages.ForumBlog />}
              />
            </Route>

            <Route element={<RequireAuthentication />}>
              <Route path="/quiz">
                <Route index element={<NotAuthPages.Quiz />} />
                <Route
                  path="mock-home"
                  element={<NotAuthPages.MockLandingPage />}
                />
                <Route path="mock" element={<NotAuthPages.Mock />} />
              </Route>
            </Route>
          </Route>

          {/* // Proteccted Routes // */}
          <Route element={<RequireAuthentication />}>
            <Route path="/dashboard" element={<AuthenticatedLayout />}>
              <Route path="/dashboard" element={<AuthPages.Overview />} />
              <Route path="blog" element={<AuthPages.Blog />} />
              <Route path="classes" element={<AuthPages.Classes />} />
              <Route path="mockexam" element={<AuthPages.MockExam />} />
              <Route path="settings" element={<AuthPages.Settings />} />
              <Route path="wallet" element={<AuthPages.Wallet />} />
              <Route path="advisor" element={<AuthPages.Advisor />} />
              <Route path="forum" element={<AuthPages.Forum />} />
              <Route path="materials" element={<AuthPages.Materials />} />
            </Route>
          </Route>

          <Route path="/auth">
            <Route index element={<NotAuthPages.Signup />} />
            <Route path="login" element={<NotAuthPages.Login />} />
            <Route
              path="forgotPassword"
              element={<NotAuthPages.ResetPassword />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
