import axiosClient from "../api/axiosClient";

export const FilmApi = {
  getMovieList: (type, param) => {
    const url = "movie/" + type;
    return axiosClient.get(url, param);
  },
  getTvList: (type, param) => {
    const url = "tv/" + type;
    return axiosClient.get(url, param);
  },
  getSimilar: (cate, id, param) => {
    const url = cate + "/" + id + "similar";
    return axiosClient.get(url, param);
  },
  getDetail: (cate, id, param) => {
    const url = cate + "/" + id;
    return axiosClient.get(url, param);
  },
  getVideos: (cate, id, param) => {
    const url = cate + "/" + id + "/videos";
    return axiosClient.get(url, param);
  },
};
