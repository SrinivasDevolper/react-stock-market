import React, { useState } from "react";
import websiteLogo from "../../public/websiteLogo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const Navbar = ({ status, setStatus, search, setSearch }) => {
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div
      className="navbar-cont"
      style={{ backgroundColor: status ? "#28292b" : "#E8E8E8" }}
    >
      <img src={websiteLogo} alt="Logo" width="50" height="50" />
      <div
        className="search-cont"
        style={{ backgroundColor: status ? "#19191b" : "#f7f8fa" }}
      >
        <input
          type="search"
          alt="search"
          search={search}
          style={{
            backgroundColor: status ? "#19191b" : "#f7f8fa",
            color: status ? "#F7F8FA" : "#19191b",
          }}
          onChange={onSearch}
        />
        <IoIosSearch className="Icon" />
      </div>
      <div className="icon-cont">
        {status ? (
          <FaRegSun className="Icon1" onClick={() => setStatus(!status)} />
        ) : (
          <IoMoon className="Icon2" onClick={() => setStatus(!status)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
