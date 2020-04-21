import React from "react";
import Location from "./Locations";
import Photo from "./Photo";
import "./Days.css";
import marketSchedule from "../Data/MarketSchedule.js";

function Days() {
  const getDetails = (dayString) => {
    let result;

    marketSchedule.forEach((obj) => {
      if (dayString === obj.day) {
        result = obj;
      }
    });
    return result;
  };

  let data = getDetails("Tuesday");
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
          <Location day={data.day} hours={data.hours} location={data.location} booth={data.booth} />
        </div>
        <div className="days-row">
          <Photo />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Days;
