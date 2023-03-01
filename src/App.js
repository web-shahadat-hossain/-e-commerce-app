import { Fragment, useState } from "react";
import "./App.css";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import AllRouter from "./router/AllRouter";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <Fragment>
      {!loading && (
        <>
          <Header />
          <AllRouter />
          <Footer />
        </>
      )}
    </Fragment>
  );
}

export default App;
