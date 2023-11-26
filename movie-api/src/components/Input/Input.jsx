import React from 'react'
import { useMovieContext } from '../../context/MovieContext/context'

const Input = ({side}) => {
  const {setTitle} = useMovieContext()
  return (
    <>
    <label><b>Search</b></label>
    <input  onChange={(e)=>setTitle(e.target.value)} class = "input" />
    </>
     

   
  )
}

export default Input