import React, { useState } from 'react';
import { useFavorites } from './FavText.jsx';
import NavBar from './NavBar.jsx';
import { Heart } from 'lucide-react';

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    window.location.href = '/';
  };

  const isFavorite = (movie) =>
    favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <>
      <NavBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {favorites.length === 0 ? (
        <div className="text-center mt-10 text-xl text-gray-500">
          No favorite movies added yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="relative border border-gray-200 rounded-md p-2">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                alt={movie.Title}
                className="w-full h-auto"
              />
              <button
                onClick={() => removeFromFavorites(movie.imdbID)}
                className="absolute top-2 right-2"
              >
                <Heart className="w-6 h-6 text-red-500 fill-red-500 hover:scale-110 transition-all duration-200" />
              </button>
              <h3 className="text-lg font-semibold">{movie.Title}</h3>
              <p className="text-sm text-gray-600">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
