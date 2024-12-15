import React from "react";
import "./Feed.css";

const Feed = ({ thumbnail, title, channel, views, time }) => {
  return (
    <div className="feed">
      <div className="thumbnail-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="thumbnail"
          className="thumbnail-image"
        />
        <div className="thumbnail-details">
          <h3 className="thumbnail-title">
            Remy Ma Calls Papoose Out For Cheating With Claressa Shields, Pap
            Fires Back
          </h3>
          <p className="thumbnail-channel">Breakfast Club Power 105.1 FM</p>
          <p className="thumbnail-meta">496K Views • 19 hours ago</p>
        </div>
      </div>
      <div className="thumbnail-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="thumbnail"
          className="thumbnail-image"
        />
        <div className="thumbnail-details">
          <h3 className="thumbnail-title">
            Remy Ma Calls Papoose Out For Cheating With Claressa Shields, Pap
            Fires Back
          </h3>
          <p className="thumbnail-channel">Breakfast Club Power 105.1 FM</p>
          <p className="thumbnail-meta">496K Views • 19 hours ago</p>
        </div>
      </div>
      <div className="thumbnail-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="thumbnail"
          className="thumbnail-image"
        />
        <div className="thumbnail-details">
          <h3 className="thumbnail-title">
            Remy Ma Calls Papoose Out For Cheating With Claressa Shields, Pap
            Fires Back
          </h3>
          <p className="thumbnail-channel">Breakfast Club Power 105.1 FM</p>
          <p className="thumbnail-meta">496K Views • 19 hours ago</p>
        </div>
      </div>
      <div className="thumbnail-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="thumbnail"
          className="thumbnail-image"
        />
        <div className="thumbnail-details">
          <h3 className="thumbnail-title">
            Remy Ma Calls Papoose Out For Cheating With Claressa Shields, Pap
            Fires Back
          </h3>
          <p className="thumbnail-channel">Breakfast Club Power 105.1 FM</p>
          <p className="thumbnail-meta">496K Views • 19 hours ago</p>
        </div>
      </div>
      <div className="thumbnail-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="thumbnail"
          className="thumbnail-image"
        />
        <div className="thumbnail-details">
          <h3 className="thumbnail-title">
            Remy Ma Calls Papoose Out For Cheating With Claressa Shields, Pap
            Fires Back
          </h3>
          <p className="thumbnail-channel">Breakfast Club Power 105.1 FM</p>
          <p className="thumbnail-meta">496K Views • 19 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
