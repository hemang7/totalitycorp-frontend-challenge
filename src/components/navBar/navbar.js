import React from "react";
import "./navbar.css";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {AiOutlineUser} from "react-icons/ai"
import { BiHomeCircle, BiHash, BiBookmark } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBar = () => {
  return (
    <div id="container-nav">
      <div id="nav-up">
        <span id="twitter-box">
          <FaTwitter id="twitter-icon" />
        </span>
        <button id="row">
          <BiHomeCircle id="home-icon" />
          <p id="nav-title">Home</p>
        </button>

        <button id="row">
          <BiHash id="home-icon" />
          <p id="nav-title">Explore</p>
        </button>

        <button id="row">
          <BsPeople id="home-icon" />
          <p id="nav-title">Communities</p>
        </button>

        <button id="row">
          <IoNotificationsOutline id="home-icon" />
          <p id="nav-title">Notifications</p>
        </button>

        <button id="row">
          <HiOutlineEnvelope id="home-icon" />
          <p id="nav-title">Messages</p>
        </button>

        <button id="row">
          <BiBookmark id="home-icon" />
          <p id="nav-title">Bookmarks</p>
        </button>


        <button id="row">
          <AiOutlineUser id="home-icon" />
          <p className="bold" id="nav-title">
            Profile
          </p>
        </button>

        <button id="row">
          <CgMoreO id="home-icon" />
          <p id="nav-title">More</p>
        </button>

        <button id="tweet">Tweet</button>
      </div>

      <div id="bottom-nav">
        <span id="user-box">
          <img
            id="person"
            src="https://avatars.githubusercontent.com/u/24756996?s=400&u=d2befde55dc20fa4e98d05c554ff2e5e52f48599&v=4"
            alt="profile"
          />
          <span>
            <p id="name">hemang</p>
            <p id="id">@hemang21</p>
          </span>
        </span>

        <span>
          <CgMoreAlt id="more-bottom" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
