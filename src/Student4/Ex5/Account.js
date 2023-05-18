import React from "react";

import { useState } from "react";

export const Account = () => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      <div>
        <h1>Account Information</h1>
        <table>
          <tr>
            <th>Balance</th>
            <td>$100,000</td>
          </tr>

          <tr>
            <th>Interest</th> <td>%5.0</td>
          </tr>

          <tr>
            <th>Account Number</th>
            <td> {show ? <span>11-1234</span> : null}</td>
            <td>
              <button onClick={() => clickHandler()}>
                {show ? "hide" : "show"}
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
