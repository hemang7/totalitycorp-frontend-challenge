import React, { useState } from "react";
import "./main.css";

import { BiArrowBack } from "react-icons/bi";
import { CgMoreAlt, CgCalendarDates } from "react-icons/cg";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import {AiOutlineLink} from "react-icons/ai"

import Tweet from "../tweet/tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  console.log(follow);

  const followHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="container-main">
      <div id="box-top">
        <span id="back-icon-box">
          <BiArrowBack id="back-icon" />
        </span>

        <div id="box-top-right">
          <p id="name-header">hemang</p>
          <span id="tweets-number">5 Tweets</span>
        </div>
      </div>

      <div id="header-box">
        <div id="profile-image"></div>
      </div>

      <div id="edit-box">
        <span id="more-box">
          <CgMoreAlt id="more-header" />
        </span>
        <span id="more-box">
          <HiOutlineEnvelope id="more-header" />
        </span>
        <button
          className={follow === false ? "following" : "Follow"}
          onClick={followHandler}
        >
          {follow ? "Follow" : "Following"}

        </button>
      </div>

      <div id="name-id-box">
        <p id="name-user">hemang</p>
        <p id="id-user">@hemang21</p>
      </div>

      <div id="job-box">
        <p id="job">React Developer</p>
      </div>

      <div id="date-box">
        <IoLocationOutline id="date-icon" />
        <p id="date">India </p> &nbsp; &nbsp;
        <AiOutlineLink id="date-icon"/>
        <a id="link" href="https://hemang-portfolio2.vercel.app/">hemang-portfolio2.vercel.app</a>&nbsp; &nbsp;
        <CgCalendarDates id="date-icon" />
        <p id="date">Joined October 2022</p>
      </div>

      <div id="following-follow-box">
        <span id="number-follow">0</span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Following
        </a>

        <span id="number-follow" className="margin-left">
          {follow === false ? 70 : 69}
        </span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Followers
        </a>
      </div>

      <div id="nav-header">
        <div id="box-nav" className="box-Tweets">
          <p id="nav">Tweets</p>
        </div>

        <div id="box-nav" className="box-replies">
          <p id="nav">Tweets & replies</p>
        </div>

        <div id="box-nav" className="box-Media">
          <p id="nav">Media</p>
        </div>

        <div id="box-nav" className="box-Likes">
          <p id="nav">Likes</p>
        </div>
      </div>

      <div id="line"></div>

      <Tweet
        tweet="I should try and watch a Sunrise At Least Once A Day."
        likeNumber="25"
        comment="1"
      />
      <Tweet
        tweet="HALA MADRID!!!"
        likeNumber="44"
        comment="5"
      />
      <Tweet
        tweet="“Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.’”
        — Anonymous"
        likeNumber="60"
      />
      <Tweet
        tweet="If You Love Something, Set It Free. Unless It's A Tiger."
        likeNumber="71"
        comment="5"
      />
      <Tweet
        tweet="You Can Tell A Lot About A Person By His Biography."
        likeNumber="151"
        comment="5"
      />
      
      
    </div>
  );
};

export default Main;
