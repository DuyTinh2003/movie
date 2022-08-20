import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { FilmApi } from "./ApiService/FilmApi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
function App() {
  useEffect(() => {
    const testData = async () => {
      const params = { page: 2 };
      const response = await FilmApi.getMovieList("popular", { params });
      console.log(response);
    };
    testData();
  }, []);
  return (
    <div className="App  bg-black">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
