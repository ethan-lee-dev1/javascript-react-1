import React from "react";
import "./Main.css";
import { Tweet } from "./Tweet";
import { useState } from "react";

export const Main = () => {
  const [like, setLike] = useState(0);

  const clickHandler = () => {
    setLike(like + 1);
  };

  return (
    <div className="Tweets">
      <div>Total Likes: {like}</div>
      <Tweet
        message="It's payday!!!"
        color="green"
        clickHandler={clickHandler}
      />
      <Tweet
        message="I just bought a new car!"
        color="yellow"
        clickHandler={clickHandler}
      />
      <Tweet
        message="I just smashed my new car."
        color="red"
        clickHandler={clickHandler}
      />
    </div>
  );
};
