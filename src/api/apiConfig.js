const apiConfig = {
  baseUrl: "http://localhost:9080",
  themoviedbBaseUrl: "https://api.themoviedb.org/3",
  api_key: "6f746fe9f5a61f46cd2c3a33cd3f27d1",
  originalImg: (path_Img) => `https://image.tmdb.org/t/p/original/${path_Img}`,
  w500Img: (path_Img) => `https://image.tmdb.org/t/p/w500/${path_Img}`,
};

export default apiConfig;
