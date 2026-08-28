// import {  useState } from "react"
import { useMovieContext } from "../Contexts/MovieContext"

const MovieCard = ({movie}) => {

  
  const {favorites,setFavorites} = useMovieContext()
  

  const isFavorite = favorites.some(
    (fav) => fav.id === movie.id
  );

  function handleFavBtn() {
    if (!isFavorite) {
      setFavorites([...favorites, movie]);
    } else {
      setFavorites(
        favorites.filter((fav) => fav.id !== movie.id)
      );
    }
  }

  
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={() => handleFavBtn(movie.id)}>{isFavorite ? "♥" : "♡"}</button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-name">{movie.title}</h3>
        <p className="m-year">{movie.release_date.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard