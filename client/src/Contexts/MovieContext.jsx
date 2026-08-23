import { createContext,useState,useEffect,useContext } from "react";

const movieContext = createContext()

export const useMovieContext = ()=> useContext(movieContext)