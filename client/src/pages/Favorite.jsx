import Navbar from "../components/Navbar"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorite(){
    const {favorites,setFavorites} = useMovieContext()
    return(
        <div>
            <Navbar/>
            <div className="favorite">
            <div className="movie-grid">
        {favorites.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
        </div>
        </div>
    )
}

export default Favorite