import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import SinglePlant from "./pages/SinglePlant/SinglePlant";
import Plant from "./components/Plant/Plant";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./pages/Modal/Modal";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/plant/:id" children={<Plant />}>
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
