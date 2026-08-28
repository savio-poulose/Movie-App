import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFav = localStorage.getItem("favorites");

    return savedFav ? JSON.parse(savedFav) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites)
  }, [favorites]);

  return (
    <MovieContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};