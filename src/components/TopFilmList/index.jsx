import imgTop10 from "../../assets/images/movietheaters1.png";
import { FilmApi } from "../../ApiService/FilmApi";
import { useState, useEffect } from "react";
import CartFilm from "../CardFilm";
function TopFilmList(props) {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() => {
    const getMovieItems = async () => {
      const params = {};
      const type = props.type;
      const cate = props.cate;
      let response = null;
      if (cate === "movie") {
        response = await FilmApi.getMovieList(type, { params });
      } else {
        response = await FilmApi.getTvList(type, { params });
      }
      if (response) {
        setListFilm(response.results);
      }
    };
    getMovieItems();
  }, []);
  return (
    <div className="mx-[30px] md:w-1/3 shadow-1 rounded-[30px] overflow-hidden">
      <div>
        <img src={imgTop10} alt="" />
      </div>
      <div className="h-[520px] overflow-y-scroll scrollbar ">
        {listFilm.map((item, index) => (
          <CartFilm key={index} item={item} isInScroll={true} />
        ))}
      </div>
    </div>
  );
}

export default TopFilmList;
