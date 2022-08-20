const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "8f1b74f76da275ef2feb2d4bab12b1b8",
  getImgW500: (path) => `https://image.tmdb.org/t/p/w500${path}`,
  getImg: (path) => `https://image.tmdb.org/t/p/original${path}`,
};
export default apiConfig;
