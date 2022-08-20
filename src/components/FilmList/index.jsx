import { useState, useEffect } from "react";
import CartFilm from "../CardFilm";
import { FilmApi } from "../../ApiService/FilmApi";
function FilmList(props) {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() => {
    const getMovieItems = async () => {
      const params = props.params || {};
      const type = props.type;
      const limit = props.limit;
      const cate = props.cate;
      const id = props.id;
      let response = null;
      if (type !== "similar") {
        switch (cate) {
          case "movie":
            response = await FilmApi.getMovieList(type, { params });
            break;
          default:
            response = await FilmApi.getTvList(type, { params });
            break;
        }
      } else {
        response = await FilmApi.getSimilar(cate, id, { params });
      }
      if (response) {
        setListFilm(response.results.slice(0, limit));
      } else {
        console.error("call api fail!");
      }
    };
    getMovieItems();
  }, []);
  return (
    <div className="flex flex-wrap w-full flex-1 mx-[-15px]">
      {listFilm.map((item, index) => (
        <CartFilm key={index} item={item} />
      ))}
    </div>
  );
}

export default FilmList;
