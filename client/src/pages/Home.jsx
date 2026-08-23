import { useState } from "react"
import MovieCard from "../components/MovieCard"

const Home = () => {

  const [searchValue,setSearchValue] = useState("")

  const movies = [
    {id:1,title:"spiderman",url:"spiderman",release_date:"2026"},
    {id:2,title:"superman",url:"superman",release_date:"2015"},
    {id:3,title:"batman",url:"batman",release_date:"2024"}
  ]

  function handleSearch(event){
    event.preventDefault()
    alert(searchValue)
    setSearchValue("")
  }

  return (
    <div className="home">
      
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="search movie ..."
         value={searchValue}
         onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-grid">
        {movies.map(movie => 
        movie.title.toLocaleLowerCase().startsWith(searchValue) && <MovieCard movie={movie} key={movie.id}/>)}
      </div>    
    </div>
  )
}

export default Home