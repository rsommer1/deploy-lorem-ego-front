import React from 'react';
import "./Title.css";
import logo from "../../../public/assets/images/title/logo.png";

function Title() {
  return (
    <div className="title">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Title;
