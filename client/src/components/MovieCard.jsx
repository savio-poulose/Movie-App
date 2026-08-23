import {  useState } from "react"

const MovieCard = ({movie}) => {

  const [heart,setHeart] = useState(false)
  

  function handleFavBtn(){
    setHeart(!heart)
  }
    
  
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={handleFavBtn}>{heart ? "♥" : "♡"}</button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-name">{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard