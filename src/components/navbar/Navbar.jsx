import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../assets/long-logo.png";
import "./navbar.css";
import BasicMenu from "./ProfileMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Stays</div>
        <div className="search-bar-text2">Experiences</div>
        <div className="search-bar-text2">Online experiences</div>
      </div>

      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
