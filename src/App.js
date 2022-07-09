import "swiper/swiper.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";
import Login from "./connect/Login";
import Register from "./connect/Register";
import Create from "./components/create/Create";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route
          render={(props) => (
            <>
              <Header />
              <Routes />
              <Footer />
              <Create />
            </>
          )}
        />
      </div>
    </BrowserRouter>
    // <Login></Login>
    // <Register></Register>
  );
}

export default App;
