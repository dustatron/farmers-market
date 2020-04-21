import React from "react";
import Location from "./Locations";
import Photo from "./Photo";
import "./Days.css";
import marketSchedule from "../Data/MarketSchedule.js";

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = marketSchedule[0];
  }
  // const getDetails = (dayString) => {
  //   let result;

  //   marketSchedule.forEach((obj) => {
  //     if (dayString === obj.day) {
  //       result = obj;
  //     }
  //   });
  //   return result;
  // };

  // let data =   {
  //   day: "Sunday",
  //   location: "Lents International",
  //   hours: "9:00am - 2:00pm",
  //   booth: "4A"
  // };
  // const handleClick = (dayString) => {
  //   const fromArray = getDetails(dayString);
  //   let data = fromArray;
  // };
  render() {
    return (
      <React.Fragment>
        <div className="days-box">
          <div className="days-row">
            <h4>Days</h4>
            <p>{/* <button onClick={handleClick("Monday")}>Monday</button> */}</p>
            <p>Tuesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div className="days-row">
            <Location
              day={this.state.day}
              hours={this.state.hours}
              location={this.state.location}
              booth={this.state.booth}
            />
          </div>
          <div className="days-row">
            <Photo />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Days;
