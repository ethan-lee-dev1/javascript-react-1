import React, { useState } from "react";
import "./Main.css";
import { useRef } from "react";

export const Main = () => {
  let refInput = useRef(null);
  let [sentence, setSentence] = useState("");

  const addWord = () => {
    console.log(
      "🚀 ~ file: Main.js:15 ~ addWord ~ refInput.current.value:",
      refInput.current.value
    );

    setSentence(sentence + " " + refInput.current.value);
    refInput.current.value = "";
  };

  const clearWord = () => {
    setSentence("");
  };

  return (
    <div>
      <h1>Sentence Builder</h1>
      <p>Sentence: {sentence}</p>
      <input ref={refInput} type="text"></input>
      <button onClick={() => addWord()}>Add Word</button>
      <button onClick={() => clearWord()}>Reset</button>
    </div>
  );
};
