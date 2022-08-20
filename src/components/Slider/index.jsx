import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FilmApi } from "../../ApiService/FilmApi";
import apiConfig from "../../api/apiConfig";
import Button, { OutLineButton } from "../Button";
import { Link } from "react-router-dom";
import Modal from "../Modal";

function Slider() {
  const [movieItem, setMovieItem] = useState([]);
  useEffect(() => {
    const getMovieItems = async () => {
      const params = {};
      const response = await FilmApi.getMovieList("top_rated", { params });
      setMovieItem(response.results.slice(0, 5));
    };
    getMovieItems();
  }, []);
  const handleWatchTrailer = async (id) => {
    if (id) {
      const params = {};
      const response = await FilmApi.getVideos("movie", id, { params });
      const key = response.results[0].key;
      const video = `https://www.youtube.com/embed/${key}`;
      const modal = document.querySelector(`.modal-${id}`);
      if (modal) {
        modal.querySelector("iframe").setAttribute("src", video);
        modal.classList.remove("invisible");
      }
    }
  };
  return (
    <Swiper
      grabCursor={true}
      autoplay={true}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {movieItem.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              // container slider
              <div
                className="h-screen w-full relative z-10 flex items-center modal-slider"
                style={{
                  background: `url(${apiConfig.getImg(
                    item.backdrop_path || item.poster_path
                  )})  no-repeat center / cover  `,
                }}
              >
                {/* title and desc */}
                <div className="text-color max-w-4xl ml-20 font-medium ">
                  <h2
                    className={`text-6xl mb-10 font-semibold bg-title p-2 duration-700  translate-y-[-200px]  ${
                      isActive ? "translate-y-0" : ""
                    }`}
                  >
                    {item.original_title}
                  </h2>
                  <p
                    className={`translate-y-[-100px] mb-10 opacity-0 ${
                      isActive ? "animate-slideDown500" : ""
                    }`}
                  >
                    {item.overview}
                  </p>
                  <Button
                    className={`btn-watch shadow-btn bg-primary hover:bg-white hover:text-primary mr-6 ${
                      isActive ? "animate-slideDown" : ""
                    }`}
                    onClick={() => handleWatchTrailer(item.id)}
                  >
                    Watch Trailer
                  </Button>
                  <OutLineButton
                    className={` bg-transparent btn-watch hover:text-primary hover:bg-white ${
                      isActive ? "animate-slideDown" : ""
                    }`}
                  >
                    <Link className="" to={`/watch/${item.id}`}>
                      Watch Film
                    </Link>
                  </OutLineButton>
                </div>
                {/* poster */}
                <div
                  className={`w-[400px] h-[600px] overflow-hidden rounded-[30px] absolute left-[65%] top-[15%]  ${
                    isActive ? "animate-zoom" : ""
                  }`}
                >
                  <img
                    src={apiConfig.getImg(
                      item.backdrop_path || item.poster_path
                    )}
                    alt=""
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        );
      })}
      {movieItem.map((item, index) => (
        <Modal key={index} item={item}></Modal>
      ))}
    </Swiper>
  );
}

export default Slider;
