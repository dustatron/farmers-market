import React from "react";
import Location from "./Locations";
import Photo from "./Photo";
import "./Days.css";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import marketSchedule from "../Data/MarketSchedule.js";
import { connect } from "react-redux";
import AddMarket from "./AddMarket";

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMarket: 1 };
  }

  handleClick = (index) => {
    this.setState({ selectedMarket: index });
  };

  handleSubmitDayForm = (newMarket) => {
    const { dispatch } = this.props;
    const { day, location, hours, booth, img, id } = newMarket;

    const action = {
      type: "ADD_MARKET",
      day: day,
      location: location,
      hours: hours,
      booth: booth,
      img: img,
      id: id
    };

    dispatch(action);
  };

  render() {
    return (
      <React.Fragment>
        <div className="days-box">
          <div className="days-row">
            {/* <h4>Days</h4> */}
            <p>
              <Button variant="outlined" onClick={() => this.handleClick(1)}>
                Sunday
              </Button>
            </p>
            <p>
              <Button variant="outlined" onClick={() => this.handleClick(2)}>
                Monday
              </Button>
            </p>
            <p>
              <Button variant="outlined" onClick={() => this.handleClick(3)}>
                Tuesday
              </Button>
            </p>
            <p>
              <Button variant="outlined" onClick={() => this.handleClick(4)}>
                Wednesday
              </Button>
            </p>
            <p>
              <Button variant="outlined" onClick={() => this.handleClick(5)}>
                Thursday
              </Button>
            </p>
            <p>
              <Button variant="outlined" disabled>
                No Friday Locations
              </Button>
            </p>
            <p>
              <Button variant="outlined" onClick={() => this.handleClick(6)}>
                Saturday
              </Button>
            </p>
          </div>
          <div className="days-row">
            <Photo img={this.props.marketSchedule[this.state.selectedMarket].img} />
          </div>
          <div className="days-row">
            <Location
              day={this.props.marketSchedule[this.state.selectedMarket].day}
              hours={this.props.marketSchedule[this.state.selectedMarket].hours}
              location={this.props.marketSchedule[this.state.selectedMarket].location}
              booth={this.props.marketSchedule[this.state.selectedMarket].booth}
            />
          </div>
        </div>

        <AddMarket onSubmitDayForm={this.handleSubmitDayForm} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    marketSchedule: state
  };
};

Days = connect(mapStateToProps)(Days);

export default Days;
