import React from "react";

const Menu = () => {
  return (
    <>
          <div className="Menu">Menu</div>   {" "}
      <div className="Food">
            <div className="Subtitle">Food</div>
            <hr />    <p>Hamburger ... $1.00</p>   {" "}
        <p>Cheeseburger ... $1.00</p>    <p>Hot Dog ... $1.00</p>   {" "}
        <p>Fires ... $1.00</p>   {" "}
      </div>
         {" "}
      <div className="Drink">
            <div className="Subtitle">Drink</div>
            <hr />    <p>Coffee ... $1.00</p>    <p>Tea ... $1.00</p>   {" "}
        <p>Milk ... $1.00</p>    <p>Coke ... $1.00</p>   {" "}
      </div>
             {" "}
      <div className="Dessert">
            <div className="Subtitle">Dessert</div>
            <hr />    <p>Chocolate Pie ... $1.00</p>   {" "}
        <p>Apple Pie ... $1.00</p>    <p>Cannoli ... $1.00</p>   {" "}
      </div>
         {" "}
    </>
  );
};

export default Menu;
