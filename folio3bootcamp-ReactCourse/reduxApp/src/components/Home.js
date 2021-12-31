import React from "react";
import Article from "./Article";
// import { dataContext } from "../context";
// import { useContext } from "react";

const Home = () => {
  // const { state, dispatch } = useContext(dataContext);
  // console.log(state);
  // const { articleName, articleNumber } = data;
  return (
    <div>
      <h1>Count from Home component : {}</h1>
      <button onClick={() => console.log("Hello")}>+100</button>
      {/* articleName={articleName} articleNumber={articleNumber} */}
      {/* <Article /> */}
    </div>
  );
};

export default Home;
