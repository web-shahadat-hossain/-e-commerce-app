import { Fragment } from "react";
import "./App.css";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import AllRouter from "./router/AllRouter";

function App() {
  return (
    <Fragment>
      <Header />
      <AllRouter />
      <Footer />
    </Fragment>
  );
}

export default App;
