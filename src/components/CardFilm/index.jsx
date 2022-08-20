import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
function CartFilm(props) {
  const isInScroll = props.isInScroll;
  const item = props.item;
  if (!item) {
    return;
  }
  const img = apiConfig.getImgW500(item.backdrop_path || item.poster_path);
  const view = Math.round(item.popularity);
  const name = item.original_title || item.original_name;
  return (
    <div
      className={`${
        isInScroll ? "" : "w-1/2 md:w-1/3 lg:w-1/4 px-[15px] mb-8"
      } `}
    >
      <Link to={`/watch/${item.id}`}>
        <div className={`${isInScroll ? "flex flex-wrap py-4" : ""} `}>
          <div
            className={`${
              isInScroll
                ? "h-[110px] w-[80px] md:w-full md:h-[230px] md:mr-4  lg:mr-0 lg:h-[140px] lg:w-[95px]"
                : ""
            }  h-[210px] overflow-hidden rounded`}
          >
            <img
              src={img}
              alt=""
              className={`${
                isInScroll
                  ? ""
                  : "hover:scale-125 transition-transform duration-500 linear"
              }`}
            />
          </div>
          <div
            className={`${
              isInScroll ? "w-2/3 px-4 md:w-full lg:w-2/3" : "flex-1"
            }`}
          >
            <h4 className="text-[#ff8040] mt-1 my-2 truncate">{name}</h4>
            <div className="flex justify-between">
              <i className="fa-solid fa-eye text-sm text-primary leading-6">
                <span className="ml-2 text-[#ccc]">{view}</span>
              </i>
              <div className="">
                <i className="fa-solid fa-star text-sm"></i>
                <i className="fa-solid fa-star text-sm"></i>
                <i className="fa-solid fa-star text-sm"></i>
                <i className="fa-solid fa-star text-sm"></i>
                <i className="fa-solid fa-star text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartFilm;
