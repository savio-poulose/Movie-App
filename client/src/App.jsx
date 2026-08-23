import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
// import Navbar from "./components/Navbar.jsx";


function App() {

  return (
    <div>
      
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
