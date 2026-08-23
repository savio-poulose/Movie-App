import { useState,useEffect } from "react"
import MovieCard from "../components/MovieCard"
import Navbar from "../components/Navbar"
import { getPopularMovies,searchMovie } from "../services/api"
import Hero from "../components/Hero"

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
        // console.log(popularMovies)
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


  async function handleSearch (event){
    event.preventDefault()
    
    if(!searchValue.trim()) return

    setLoading(true)

    try{
      const searchResults = await searchMovie(searchValue)
      setMovies(searchResults)

    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }

    setSearchValue("")
  }

  return (
    <>
    <Navbar/>
    <div className="home">
      <Hero/>
      
      <form onSubmit={handleSearch}>
        <div className="search-place">
          <input type="text" placeholder="search movie ..."
        className="search-input"
         value={searchValue}
         onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit" >Search</button>
        </div>
      </form>
      {error && <div>{error}</div>}

      {loading ? <div className="loading">Loading...</div> :
      <div className="movie-grid">
        {movies.map(movie => 
        movie.title.toLocaleLowerCase().startsWith(searchValue) && <MovieCard movie={movie} key={movie.id}/>)}
      </div>    }
    </div></>
  )
}

export default Home