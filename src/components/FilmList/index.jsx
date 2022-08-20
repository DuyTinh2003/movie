import { useState, useEffect } from "react";
import CartFilm from "../CardFilm";
import { FilmApi } from "../../ApiService/FilmApi";
function FilmList(props) {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() => {
    const getMovieItems = async () => {
      const params = {};
      const type = props.type;
      const limit = props.limit;

      const response = await FilmApi.getMovieList(type, { params });
      setListFilm(response.results.slice(0, limit));
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
