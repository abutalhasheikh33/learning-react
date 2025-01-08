import {
  DocumentMagnifyingGlassIcon,
  Bars4Icon,
} from "@heroicons/react/20/solid";
import { useContext, useEffect, useState } from "react";
import { OmdbApi } from "../interfaces/OmdbApi";
import { fetchMovieData } from "../api/fetchMovieData";
import { MovieContext } from "../context/context";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  // Property 'setApiData' does not exist on type 'MovieContext | undefined'
  const { apiData, setApiData } = useContext(MovieContext);
  type FetchMovieData = (searchTerm: string, setApiData: (apiData: OmdbApi[]|undefined) => void) => void;
  useEffect(() => {
    console.log(inputValue);
    function debounce(
      func: FetchMovieData,
      wait: number
    ) {
      let timeout:number;
      return (inputValue: string, setApiData: (apiData: OmdbApi[]|undefined) => void) => {
        // Clear any existing timeout
        clearTimeout(timeout);

        // Set a new timeout to call the function after the specified wait time
        timeout = setTimeout(() => func(inputValue,setApiData), wait);
      };
    }
    const debouncedMovieSearch = debounce(fetchMovieData,5000);
    debouncedMovieSearch(inputValue,setApiData)
    
  },[inputValue]);
  return (
    <>
      <div className="nav">
        <div className="flex items-center justify-between bg-red-600 text-white">
          <div className="m-4">
            <p className="sm:text-2xl font-bold text-purple-800">PW Skills</p>
          </div>
          <ul className="hidden sm:flex sm:w-48 justify-between font-semibold text-black lg:w-96">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <span onClick={() => setToggle(!toggle)}>
            <Bars4Icon className="sm:hidden w-8 text-black" />
          </span>
          {toggle && (
            <div className="sm:hidden absolute left-[8rem] top-[3.5rem] z-10 bg-white rounded-lg shadow w-44 text-black max-w-fit">
              <ul className="text-md font-semibold px-5">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
          )}
          <div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                className="h-7 border-2 border-black focus:outline-none text-black"
              />
              <span onClick={() => setSearchTerm(inputValue)}>
                <DocumentMagnifyingGlassIcon className="h-9 text-black w-12 relative right-3"></DocumentMagnifyingGlassIcon>
              </span>
            </div>

            {apiData && (
              <div className="bg-white absolute text-black right-6 w-52">
                <ul>
                  {apiData.map((movie: OmdbApi) => {
                    return (
                      <li className="flex p-2 border-2 border-black">
                        <span>
                          <img
                            className="w-12"
                            src={String(movie.Poster)}
                            alt=""
                          />
                        </span>
                        <p className=" ml-1">{movie.Title}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
