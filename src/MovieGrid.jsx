import React, { useState } from 'react';
import { searchMovies } from "./API/omdb.js";
import NavBar from './Components/NavBar.jsx';
import { Heart } from 'lucide-react';
import { useFavorites } from './Components/FavText.jsx';

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const handleSearch = () => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    searchMovies(query)
      .then(setMovies)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  const isFavorite = (movie) =>
    favorites.some((fav) => fav.imdbID === movie.imdbID);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <>
      <NavBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading && <p className='text-center mt-10 text-xl text-white'>Loading movies...</p>}
      {error && <p className='text-center mt-10 text-xl text-red-500'>{error}</p>}
      {query.trim() === "" ? (
        <div className="text-center mt-10 text-xl text-gray-500">Start by searching for a movie!</div>
      ) :(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="relative p-2 border border-[#313131] rounded-md">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-full h-auto"
            />
            <button
              onClick={() => toggleFavorite(movie)}
              className="absolute top-2 right-2"
            >
              <Heart
                className={`w-6 h-6 transition-colors  duration-300 ${
                  isFavorite(movie) ? 'text-red-500 fill-red-500 animate-pulse  duration-initial' : 'text-gray-400'
                }`}
              />
            </button>
            <h3 className="text-lg font-semibold">{movie.Title}</h3>
            <p className="text-sm text-gray-600">{movie.Year}</p>
          </div>
        ))}
      </div>
      )
              }
    </>
  );
}
