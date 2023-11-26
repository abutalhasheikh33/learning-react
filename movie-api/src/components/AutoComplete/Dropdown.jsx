import { useState, useEffect } from "react";

import React from "react";
import { useMovieContext } from "../../context/MovieContext/context";
import { useApi } from "../../hooks/useApi";

const Dropdown = ({ side, list }) => {
  const {
    title,
    setData,
    setList,
    leftList,
    rightList,
    leftTitle,
    rightTitle,
  } = useMovieContext();

  // let movies = useApi(side === "left" ? leftTitle : rightTitle);
  const currentTitle = list === "leftList" ? leftTitle : rightTitle;
  let movies = useApi(currentTitle);
  if (movies && movies.length > 0) {
    setList(movies, list);
  }

  movies = list == "leftList" ? leftList : rightList;

  function renderDropDownItems() {
    if (movies && movies.length > 0) {
      return movies.map((movie) => {
        return (
          <a className="dropdown-item" id={movie.imdbID}>
            <img src={movie.Poster} />
            {movie.Title}
          </a>
        );
      });
    }
  }

  return (
    <div
      className={movies && movies.length > 0 ? "is-active" : ""}
      id="dropdown"
    >
      <div
        className={`dropdown-menu ${side} ${
          movies && movies.length > 0 ? "display" : ""
        } ${side == "right" ? "margin-left" : ""}`}
      >
        <div className="dropdown-content results">{renderDropDownItems()}</div>
      </div>
    </div>
  );
};

export default Dropdown;
