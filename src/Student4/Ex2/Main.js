import React from "react";
import "./Main.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Posts } from "./Posts";
import { Groups } from "./Groups";
import { Links } from "./Links";

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <Links />
      <Posts />
      <Groups />
      <Footer />
    </div>
  );
};
