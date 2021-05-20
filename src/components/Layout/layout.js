import React, { useEffect, useState } from "react";

import Header from "../Header/header";

import bubble from "../../images/bubble1.svg";
import bubble2 from "../../images/bubble2.svg";

import "./layout.scss";

const Layout = ({ children }) => {
  const [is404, set404] = useState(undefined);

  useEffect(() => {
    set404(window.location.pathname === "/404/");
  }, []);

  const styles = { height: "50vh", objectFit: "cover", objectPosition: "top" };

  return (
    <main>
      <img src={bubble} className="bubble bubble1" alt="color splash" />
      <Header />
      {children}
      <img
        src={bubble2}
        className="bubble bubble2"
        alt="color spash"
        style={is404 ? styles : undefined}
      />
    </main>
  );
};

export default Layout;
