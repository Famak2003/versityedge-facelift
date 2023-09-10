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
// import { Router } from "react-router-dom/cjs/react-router-dom";

export function App() {
  return (
    <Router>
      <div className="App relative flex flex-col gap-[5rem] font-nunito text-xl">
        {/* <LoginModal /> */}
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/predictChance">
              <PredictChance />
            </Route>
          </Switch>
          {/* <Home /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
