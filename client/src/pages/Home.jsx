import { useState } from "react"
import MovieCard from "../components/MovieCard"
import Navbar from "../components/Navbar"

const Home = () => {

  const [searchValue,setSearchValue] = useState("")

  const movies = [
    {id:1,title:"spiderman ",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP7OLRwg5aq8Z0zTGCuZeTMUAq1qnIY_VKoDWTaulMQ&s=10",release_date:"2026"},
    {id:2,title:"superman",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP7OLRwg5aq8Z0zTGCuZeTMUAq1qnIY_VKoDWTaulMQ&s=10",release_date:"2015"},
    {id:3,title:"dark night",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bATn-IEssk6KBibp0ysyNEJ_3ZOkdrwGdHjcu9jbPA&s=10",release_date:"2024"},
    {id:1,title:"spiderman",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP7OLRwg5aq8Z0zTGCuZeTMUAq1qnIY_VKoDWTaulMQ&s=10",release_date:"2026"},
    {id:2,title:"superman",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP7OLRwg5aq8Z0zTGCuZeTMUAq1qnIY_VKoDWTaulMQ&s=10",release_date:"2015"},
    {id:3,title:"dark night",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bATn-IEssk6KBibp0ysyNEJ_3ZOkdrwGdHjcu9jbPA&s=10",release_date:"2024"},
    {id:1,title:"spiderman",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP7OLRwg5aq8Z0zTGCuZeTMUAq1qnIY_VKoDWTaulMQ&s=10",release_date:"2026"},
    {id:2,title:"superman",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP7OLRwg5aq8Z0zTGCuZeTMUAq1qnIY_VKoDWTaulMQ&s=10",release_date:"2015"},
    {id:3,title:"dark night",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bATn-IEssk6KBibp0ysyNEJ_3ZOkdrwGdHjcu9jbPA&s=10",release_date:"2024"}
  ]

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