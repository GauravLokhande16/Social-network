import React from "react";
import "./leftBar.scss";
import memories from "../../assets/chronometer.png";
import friends from "../../assets/friends.png";
import group from "../../assets/group.png";
import marketplace from "../../assets/marketplace.png";
import watch from "../../assets/watch-movie.png";
import events from "../../assets/planner.png";
import gaming from "../../assets/friends.png";
import gallery from "../../assets/picture.png";
import videos from "../../assets/youtube.png";
import messages from "../../assets/email.png";
import fundraiser from "../../assets/chronometer.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/4881606/pexels-photo-4881606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User"
            />
            <span>Gaurav Lokhande</span>
          </div>

          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={group} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="" />
            <span>Message</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
