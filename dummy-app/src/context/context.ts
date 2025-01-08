import React from "react";
import {OmdbApi} from "../interfaces/OmdbApi"
interface MovieContext {
    setApiData:(apiData:OmdbApi[]|undefined)=>void;
    apiData:OmdbApi[]|undefined;
}
export const MovieContext = React.createContext<MovieContext>({
    apiData: undefined,
    setApiData: () => {}, // Default function to avoid errors
  });
