import React from "react";

export const Tweet = ({ message, color, clickHandler }) => {
  return (
    <div style={{ backgroundColor: `${color}` }}>
      {message}

      <button onClick={() => clickHandler()}>click</button>
    </div>
  );
};
