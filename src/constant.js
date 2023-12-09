// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const API_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWJlOGFkZTA0YTU0OTUxY2JjYTQ2MGIzZDE0MWNlOSIsInN1YiI6IjY1NzBhOTkxMGJiMDc2MDEzODllMDA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDOhJIt-X6w-RKftvtFNTNI2x1RycI8gubhsoEnJfKg'
  }
};

export const language = [
  {
    "en":"English",
  },
  {
    "en" : "Hindi",
  }
]



export const POSTER_IMG_URL ="https://image.tmdb.org/t/p/w200/";

export const OpenApiKey = "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";

