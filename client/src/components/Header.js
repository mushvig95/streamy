import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="headerLeft">
          <Link to="/">Streamy</Link>
        </div>
        <div className="headerRight">
          <Link to="/">All Streams</Link>
          <Link to="/">
            <GoogleAuth />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
