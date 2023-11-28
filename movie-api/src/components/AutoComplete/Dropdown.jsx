import { useEffect, useState } from "react";

import React from 'react'
import { useMovieContext } from "../../context/MovieContext/context";
import { useApi } from "../../hooks/useApi";

const Dropdown = ({title,data,side}) => {
  const {setData,setTitle}  = useMovieContext()
  const [id,setId] = useState("")
  const movies = useApi(title,'s')
  const movie =  useApi(id,'i')
  useEffect(()=>{
    
    if(movie){
      setData(movie,side)
      setTitle(movie.Title,side)
    }
    
    

  },[movie])
  
  

  

 
    
  function renderDropDownItems(){
   
    if(movies&&movies.length>0){
      
     return movies.map((movie)=>{
       
        return <a onClick={(e)=>setId(e.target.id)} className="dropdown-item" id={movie.imdbID}><img src={movie.Poster} />{movie.Title}</a>
       })
    }
}
  return (
   <div  className={`dropdown ${movies&&movies.length>0?'is-active':''}`} >
      <div className={`dropdown-menu`} style={{position:"static"}} >

        <div className="dropdown-content">
              {renderDropDownItems()}
        </div>
      </div>
   </div>
  )
}

export default Dropdown