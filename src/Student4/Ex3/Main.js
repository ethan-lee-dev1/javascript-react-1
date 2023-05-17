import React from "react";
import "./Main.css";
import { Tweet } from "./Tweet";

export const Main = () => {
  return (
    <div className="Tweets">
      <div>Tweet Storm</div>
      <Tweet message="It's payday!!!" color="green" />
      <Tweet message="I just bought a new car!" color="yellow" />
      <Tweet message="I just smashed my new car." color="red" />
    </div>
  );
};
