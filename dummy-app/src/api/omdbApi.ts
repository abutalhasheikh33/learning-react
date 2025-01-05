import { useEffect } from "react"
import axios from "axios"
const ombdbApi = (searchTerm:string,setApiData)=>{
           const apiData = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apiKey=ac899545`);
           return apiData
   
}

export default ombdbApi;