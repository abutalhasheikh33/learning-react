import { useRef, useState } from "react";
import Header from "./components/Header/Header";

import { MovieProvider } from "./context/MovieContext/context";
import Input from "./components/Input/Input";
import Section from "./components/Section/Section";
import Dropdown from "./components/AutoComplete/Dropdown";

function App() {
  const [title, setTitle] = useState("");
  const [left, setLeft] = useState({});
  const [right, setRight] = useState({});
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [leftTitle, setLeftTitle] = useState(""); 
  const [rightTitle, setRightTitle] = useState(""); 
  const setData = (data, side) => {
    if (side == "left") {
      setLeft(data);
    } else if (side == "right") {
      setRight(data);
    }
  };
  const setList = (data, list) => {
    if (list == "leftList") {
      setLeftList(data);
    } else if (list == "rightList") {
      setRightList(data);
    }
  };
  return (
    <MovieProvider
      value={{
        left,
        right,
        title,
        leftList,
        rightList,
        setData,
        setTitle,
        setList,
        leftTitle,
        setLeftTitle,
        rightTitle,
        setRightTitle,
      }}
    >
      <Header />
      <div className="container">
        <div className="columns">
          <div className="column">
            <div id="left-autocomplete">
              <Input side="left" />
              <Dropdown side="left" list="leftList" />
            </div>

            <Section />
          </div>

          <div className="column">
            <div id="right-autocomplete">
              <Input side="right" />
              <Dropdown side="right" list="rightList" />
            </div>
            <Section />
          </div>
        </div>
        <div
          className={`column is-half notification is-primary tutorial ${
            title ? "hide" : ""
          }`}
        >
          <h1 className="title">Search For a Movie on Both Sides</h1>
          <p className="subtitle">We will tell you which is best</p>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
