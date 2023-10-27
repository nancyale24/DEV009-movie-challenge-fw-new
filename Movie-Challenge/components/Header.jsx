import React from "react";

function Header() {
  return (
    <>
      <div className="menu">
        <img className="logo" src="./assets/logo.png" alt="Movie Lab" />

        <div className="iconConteiner">
          <img className="homeIcon" src="./assets/home.svg" alt="home icon" />
          <img className="azIcon" src="./assets/az.svg" alt="sort ascending" />
          <img className="zaIcon" src="./assets/za.svg" alt="sort descending" />
          <input className="searchIcon" type="text" placeholder="Search..."/>
        </div>
      </div>

    </>
  );
}

export default Header;
