import React from 'react'
import { useMovieContext } from '../../context/MovieContext/context'

const Input = ({side,title}) => {
  const {setTitle} = useMovieContext()
  function titleChange(e){
    setTitle(e.target.value,side)
  }

  return (
    <>
    <label><b>Search</b></label>
    <input value={title}  onChange={(e)=>titleChange(e)} class = "input" />
    </>
     

   
  )
}

export default Input