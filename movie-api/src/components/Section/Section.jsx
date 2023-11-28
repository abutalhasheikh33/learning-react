import { useState,useContext } from "react";

import React from 'react'

const Section = ({side,movieDetail,classes}) => {
   function showSection(){
    
       console.log(classes)
        if(Object.keys(movieDetail).length!==0){
            return {display:'block'}
        } else{
            return {display:'none'}
        }
   }
  return (
    <div style={showSection()}>
      <article className = "media">
    <figure className = "media-left">
        <p className = "image">
            <img src ={`${movieDetail?movieDetail.Poster:""}`}/>
        </p>
    </figure>
    <div className = "media-content">
        <div className = "content">
            <h1>{movieDetail?movieDetail.Title:""}</h1>
            <h4>{movieDetail?movieDetail.Genre:""}</h4>
            <p>{movieDetail?movieDetail.Plot:""}</p>
        </div>
    </div>
</article>
<article data-value="${awards}" className = {`notification is-primary ${classes[0]}`}>
    <p className="title">{movieDetail?movieDetail.Awards:""}</p>
    <p className="subtitle">Awards</p>
</article>
 <article data-value="${boxOffice}" className = {`notification is-primary ${classes[1]}`}>
    <p className="title">{movieDetail?movieDetail.BoxOffice:""}</p>
    <p className="subtitle">Box Office</p>
</article>
 <article data-value="${metaScore}" className = {`notification is-primary ${classes[2]}`}>
    <p className="title">{movieDetail?movieDetail.Metascore:""}</p>
    <p className="subtitle">Metascore</p>
</article>
 <article data-value="${imdbRating}" className = {`notification is-primary ${classes[3]}`}>
    <p className="title">{movieDetail?movieDetail.imdbRating:""}</p>
    <p className="subtitle">IMDB Rating</p>
</article>
 <article data-value="${imdbVotes}" className = {`notification is-primary ${classes[4]}`}>
    <p className="title">{movieDetail?movieDetail.imdbVotes:""}</p>
    <p className="subtitle">IMDB Votes</p>
</article>
    </div>
    
  )
}

export default Section
