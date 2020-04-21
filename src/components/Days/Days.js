import React from "react";
import Location from "./Locations";
import Photo from "./Photo";
import "./Days.css";

function Days() {
  return (
    <React.Fragment>
      <div className="days-box">
        <div className="days-row">
          <h4>Days</h4>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
        <div className="days-row">
          <Location />
        </div>
        <div className="days-row">
          <Photo />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Days;
