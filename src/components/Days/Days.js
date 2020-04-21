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

  handleClick = (index) => {
    this.setState(marketSchedule[index]);
  };

  render() {
    return (
      <React.Fragment>
        <div className="days-box">
          <div className="days-row">
            <h4>Days</h4>
            <p><button onClick={() => this.handleClick(1)}>Monday</button></p>
            <p><button onClick={() => this.handleClick(2)}>Tuesday</button></p>
            <p><button onClick={() => this.handleClick(3)}>Wednesday</button></p>
            <p><button onClick={() => this.handleClick(4)}>Thursday</button></p>            
            <p><button onClick={() => this.handleClick(5)}>Friday</button></p>
            <p><button onClick={() => this.handleClick(6)}>Saturday</button></p>
            <p><button onClick={() => this.handleClick(0)}>Sunday</button></p>
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
