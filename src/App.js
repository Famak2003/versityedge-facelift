import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

// import LoginModal from "./components/common/LoginModal";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/homeComponents/Home";
import PredictChance from "./components/predictChanceComponents/PredictChance";
import ContactUs from "./components/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App relative flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl lmobile:gap-[3rem] md:gap-[5rem]">
        {/* <LoginModal /> */}
        <Header />
        <main className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/predictChance">
              <PredictChance />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
          </Switch>
          {/* <Home /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
