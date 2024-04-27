import React, { useState, useEffect } from "react";
import trollFace from "/trollface.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headContent flex">
        <div className="headLeft flex">
          <img src={trollFace} alt="Troll Face" />
          <h2>Meme Generator</h2>
        </div>

        <div>
          <p>React Course - Project 2</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
