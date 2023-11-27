import { useEffect, useState } from "react";

import React from 'react'
import { useMovieContext } from "../../context/MovieContext/context";
import { useApi } from "../../hooks/useApi";

const Dropdown = ({title,list,listData}) => {
  const {setData,setList}  = useMovieContext()
  
  const movies = useApi(title)
  

  
    if (movies && movies.length > 0) {
      setList(movies, list); 
    }
 
 
  

  
  function renderDropDownItems(){
   
    if(listData&&listData.length>0){
      
     return listData.map((movie)=>{
       
        return <a className="dropdown-item" id={movie.imdbID}><img src={movie.Poster} />{movie.Title}</a>
       })
    }
    
   
  }
  return (
   <div  className={`dropdown ${listData&&listData.length>0?'is-active':''}`} >
      <div className={`dropdown-menu`} style={{position:"static"}} >

        <div className="dropdown-content">
              {renderDropDownItems()}
        </div>
      </div>
   </div>
  )
}

export default Dropdown