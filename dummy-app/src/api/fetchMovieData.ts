import axios, { AxiosResponse } from "axios";
import { OmdbApi } from "../interfaces/OmdbApi";
import { toast } from "react-toastify";

export const fetchMovieData = async (
    searchTerm: string,
    setApiData: (data: OmdbApi[]|undefined) => void
) => {
    if (searchTerm !== "") {
        try {
            const response: AxiosResponse<{ Search?: OmdbApi[] }> = await axios.get(
                `https://www.omdbapi.com/?s=${searchTerm}&apiKey=ac899545`
            );        
            if (response.data?.Search) {
                setApiData(response.data.Search);
            }
        } catch (error:any) {
            console.log(error.message)
            toast.error(`Error fetching movie data:${error.message}`)
        }
    }else{
        setApiData(undefined)
    }
};
