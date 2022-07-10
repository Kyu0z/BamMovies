import "swiper/swiper.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";
import Create from "./components/create/Create";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
