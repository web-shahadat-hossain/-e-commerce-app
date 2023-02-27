import { Fragment } from "react";
import "./App.css";
import Header from "./common/header/Header";
import AllRouter from "./router/AllRouter";

function App() {
  return (
    <Fragment>
      <Header />
      <AllRouter />
    </Fragment>
  );
}

export default App;
