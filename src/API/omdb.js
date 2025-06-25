export const searchMovies = (query) => {
  return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") return data.Search;
      else throw new Error(data.Error || "No movies found");
    });
};

export const getMovieById = (imdbID) => {
  return fetch(`https://www.omdbapi.com/?apikey=${vite.env.API_KEY}&i=${imdbID}`)
    .then(res => res.json());
};
