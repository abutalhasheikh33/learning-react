import { createContext, useContext } from "react";


export const MovieContext = createContext({})

export const MovieProvider = MovieContext.Provider;

export const useMovieContext = ()=>(
    useContext(MovieContext)
)


