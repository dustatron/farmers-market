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

  handleClick = (id) => {
    this.setState({ selectedMarket: id });
  };

  handleSubmitDayForm = (newMarket) => {
    const { dispatch } = this.props;
    let { day, location, hours, booth, img, id } = newMarket;
    if (!img) {
      img = "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg";
    }

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

  handleDayDeletion = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_MARKET",
      id: id
    };
    dispatch(action);
    this.setState({ selectedMarket: null });
  };

  //obj[Object.keys(obj)[0]]; //returns 'someVal'

  render() {
    let renderImg;
    let renderLocaiton;

    if (this.state.selectedMarket) {
      renderImg = <Photo img={this.props.marketSchedule[this.state.selectedMarket].img} />;
      renderLocaiton = (
        <Location
          day={this.props.marketSchedule[this.state.selectedMarket].day}
          hours={this.props.marketSchedule[this.state.selectedMarket].hours}
          location={this.props.marketSchedule[this.state.selectedMarket].location}
          booth={this.props.marketSchedule[this.state.selectedMarket].booth}
          id={this.state.selectedMarket}
          onDayDelete={this.handleDayDeletion}
        />
      );
    } else {
      renderImg = (
        <Photo
          img={"https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg"}
        />
      );
      renderLocaiton = (
        <Location
          day={"No Day Selected"}
          hours={"Please select a day"}
          location={""}
          booth={""}
          id={""}
          onDayDelete={null}
        />
      );
    }

    return (
      <React.Fragment>
        <div className="days-box">
          <div className="days-row">
            <h2>Days</h2>

            {Object.values(this.props.marketSchedule).map((thisDay) => {
              return (
                <div>
                  <Button variant="outlined" onClick={() => this.handleClick(thisDay.id)}>
                    {thisDay.day}
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="days-row">{renderImg}</div>
          <div className="days-row">{renderLocaiton}</div>
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
