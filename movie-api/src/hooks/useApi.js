import { useCallback, useEffect, useState } from "react";

export const useApi = (title,prefix)=>{
    const [data,setData]  = useState();
    
    useEffect(()=>{
            
            fetch(`http://www.omdbapi.com/?${prefix}=${title}&apikey=a4405370`).then((res)=>{
                return res.json()
            }).then((res)=>{
              
                //const {Title,Genre,Plot,Awards,BoxOffice,Metascore,imdbRating,imdbVotes} = res
                if(prefix=='s'){
                    setData(res.Search);
                }else if(prefix=='i'){
                    setData(res)
                }
                
            })
                         
       
    },[title])
    if(title==""){
        return;
      }
  return data
}