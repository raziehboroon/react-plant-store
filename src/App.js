import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SinglePlant from "./pages/SinglePlant";
import Plant from "./components/Plant";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./pages/Modal";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/plant/:id" children={<Plant />}>
          <SinglePlant />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Modal />
      <Footer />
    </Router>
  );
}

export default App;
