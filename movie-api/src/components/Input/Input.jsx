import React from "react";
import { useMovieContext } from "../../context/MovieContext/context";

const Input = ({ side }) => {
  const { setTitle, setLeftTitle, setRightTitle, rightTitle, leftTitle } = useMovieContext();

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    setTitle(inputValue);
    if (side === "left") {
      setLeftTitle(inputValue);
    } else if (side === "right") {
      setRightTitle(inputValue);
    }
  };

  return (
    <>
      <label>
        <b>Search</b>
      </label>
      <input
        onChange={handleTitleChange}
        className={`input ${side}`}
      />
    </>
  );
};

export default Input;
