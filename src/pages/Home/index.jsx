import Slider from "../../components/Slider";
import TopFilmList from "../../components/TopFilmList";
import FilmList from "../../components/FilmList";
import { movie, tv, category } from "../../api/tmdbconfig";
function Home() {
  return (
    <>
      <Slider></Slider>
      <div className="container lg:px-16 bg-black h-[10000px] mx-auto text-white mt-6">
        <div className="mb-10">
          <h2 className="text-primary font-semibold text-3xl mb-6 inline-block border-b-4 border-primary pb-1">
            Popular Movies
          </h2>
          <div className="flex flex-wrap">
            <FilmList
              cate={category.movie}
              type={movie.upcoming}
              limit={8}
            ></FilmList>
            <TopFilmList
              cate={category.movie}
              type={movie.popular}
            ></TopFilmList>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-primary font-semibold text-3xl mb-6 inline-block border-b-4 border-primary pb-1">
            Top Rated TV
          </h2>
          <div className="flex flex-wrap">
            <FilmList
              cate={category.tv}
              type={tv.top_rated}
              limit={8}
            ></FilmList>
            <TopFilmList cate={category.tv} type={tv.popular}></TopFilmList>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
