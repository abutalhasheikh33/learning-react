import { useState,useContext } from "react";

import React from 'react'

const Section = ({side,movieDetail}) => {
    const [style,setStyle] = useState(false);
  return (
    <div>
      <article class = "media">
    <figure class = "media-left">
        <p class = "image">
            <img src ={`${movieDetail?movieDetail.Poster:""}`}/>
        </p>
    </figure>
    <div class = "media-content">
        <div class = "content">
            <h1>{movieDetail?movieDetail.Title:""}</h1>
            <h4>{movieDetail?movieDetail.Genre:""}</h4>
            <p>{movieDetail?movieDetail.Plot:""}</p>
        </div>
    </div>
</article>
<article data-value="${awards}" class = "notification is-primary">
    <p class="title">{movieDetail?movieDetail.Awards:""}</p>
    <p class="subtitle">Awards</p>
</article>
 <article data-value="${boxOffice}" class = "notification is-primary">
    <p class="title">{movieDetail?movieDetail.BoxOffice:""}</p>
    <p class="subtitle">Box Office</p>
</article>
 <article data-value="${metaScore}" class = "notification is-primary">
    <p class="title">{movieDetail?movieDetail.Metascore:""}</p>
    <p class="subtitle">Metascore</p>
</article>
 <article data-value="${imdbRating}" class = "notification is-primary">
    <p class="title">{movieDetail?movieDetail.imdbRating:""}</p>
    <p class="subtitle">IMDB Rating</p>
</article>
 <article data-value="${imdbVotes}" class = "notification is-primary">
    <p class="title">{movieDetail?movieDetail.imdbVotes:""}</p>
    <p class="subtitle">IMDB Votes</p>
</article>
    </div>
    
  )
}

export default Section
