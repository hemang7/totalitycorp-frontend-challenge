import React from "react";
import "./right.css";
import AccountMight from "../accountMight/accountMight";

import { RiSearchLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import TrendsComponent from "../trendsComponents/trends";

const Right = () => {
  return (
    <div id="container-right">
      <div id="fixed-search">
        <div id="search-box">
          <input placeholder=" Search Twitter" id="serch-input" type="text" />
          <RiSearchLine id="search-icon" />
        </div>
      </div>

      <div id="image-post-box">
        <div id="box-left-post"></div>
        <div id="box-right">
          <div id="box-up"></div>
          <div id="box-down"></div>
        </div>
      </div>

      <div id="might-like-box">
        <h2 id="title-might">You might like</h2>
        <AccountMight
          verified={true}
          name="Totality Corp"
          id="@totalityCorp"
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQFxW0DINigh9A/company-logo_200_200/0/1519912200130?e=1674691200&v=beta&t=zMpVyZLmjbIYUe2NTh0DSNv--AMobHD9x29uNuufTL0"
        />

        <AccountMight
          verified={true}
          name="ICC"
          id="@icc"
          src="https://pbs.twimg.com/profile_images/1404378291599937536/b-r3SWlW_400x400.jpg"
        />

        <AccountMight
          verified={true}
          name="JavaScript"
          id="@JavaScript"
          src="https://usefulangle.com/img/thumb/javascript.png"
        />
        <AccountMight
          verified={true}
          name="Elon Musk"
          id="@elonmusk"
          src="https://pbs.twimg.com/profile_images/1580062742693699584/RJ5EI7PS_400x400.jpg"
        />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <div id="trends-container">
        <div id="header-trends">
          <p id="trends-text">Trends</p>
          <span id="box-setting-icon">
            <IoSettingsOutline id="setting-icon" />
          </span>
        </div>

        <TrendsComponent name="Metaverse" number="63.5K" subject="Technology" />
        <TrendsComponent
          name="NarendraModi"
          number="13.1K"
          subject="Politics"
        />
        <TrendsComponent name="T20WorldCup" number="18.5K" subject="Sports" />
        <TrendsComponent
          name="BlackAdam"
          number="35.8K"
          subject="Entertainment"
        />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <footer id="footer">
        <div id="footer-top">
          <a id="terms" href="#" onClick={(e) => e.preventDefault()}>
            Terms of Service
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            Cookie Policy
          </a>
        </div>

        <div id="footer-down">
          <a id="terms" href="#" onClick={(e) => e.preventDefault()}>
            Accessibility
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Ads info
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            More...
          </a>
          <br></br>
          <div>
            <p id="copyright">
              © 2022 Twitter, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Right;
