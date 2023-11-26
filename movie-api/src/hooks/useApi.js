import { useEffect, useState } from "react";

export const useApi = (title)=>{
    const [data,setData]  = useState([]);
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=a4405370`).then((res)=>{
        return res.json()
    }).then((res)=>{
      
        //const {Title,Genre,Plot,Awards,BoxOffice,Metascore,imdbRating,imdbVotes} = res
       
        setData(res.Search);
    })
    },[title])
     
  return data
}