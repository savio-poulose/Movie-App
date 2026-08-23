import { useState,useEffect } from "react"
import MovieCard from "../components/MovieCard"
import Navbar from "../components/Navbar"
import { getPopularMovies } from "../services/api"

const Home = () => {

  const [searchValue,setSearchValue] = useState("")
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  useEffect(()=>{
    const loadPopularMovies = async ()=>{
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
        console.log(popularMovies)
      }catch(err){
        console.log(err)
        console.log("failed to load movies")
        setError("failed to load movies")
      }finally{
        setLoading(false)
      }
    }
    loadPopularMovies()
  },[])


  function handleSearch(event){
    event.preventDefault()
    alert(searchValue)
    setSearchValue("")
  }

  return (
    <>
    <Navbar/>
    <div className="home">
      
      <form onSubmit={handleSearch}>
        <div className="search-place">
          <input type="text" placeholder="search movie ..."
        className="search-input"
         value={searchValue}
         onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit">Search</button>
        </div>
      </form>
      <div className="movie-grid">
        {movies.map(movie => 
        movie.title.toLocaleLowerCase().startsWith(searchValue) && <MovieCard movie={movie} key={movie.id}/>)}
      </div>    
    </div></>
  )
}

export default Home