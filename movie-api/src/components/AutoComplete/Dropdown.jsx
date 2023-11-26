import { useState } from "react";

import React from 'react'
import { useMovieContext } from "../../context/MovieContext/context";
import { useApi } from "../../hooks/useApi";

const Dropdown = ({side,list}) => {
  const {title,setData,setList,leftList,rightList}  = useMovieContext()
  let movies = useApi(title);
  if(movies&&movies.length>0){
    setList(movies,list)
  }
  
  movies = list=="leftList"?leftList:rightList;

  
  function renderDropDownItems(){
    
    if(movies&&movies.length>0){
     return movies.map((movie)=>{
       
        return <a className="dropdown-item" id={movie.imdbID}><img src={movie.Poster} />{movie.Title}</a>
       })
    }
    
   
  }
  return (
   <div ref={side=="left"?leftRef:rightRef} className={movies&&movies.length>0?'is-active':''} id="dropdown">
      <div className={`dropdown-menu ${movies && movies.length > 0 ? 'display' : ''}`}>

        <div className="dropdown-content results">
              {renderDropDownItems()}
        </div>
      </div>
   </div>
  )
}

export default Dropdown