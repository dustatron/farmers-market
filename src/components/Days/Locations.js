import React from "react";

function Location(props) {
  return (
    <React.Fragment>
      <h4>Location</h4>
      <p>Day = {props.day}</p>
      <p>Location = {props.location}</p>
      <p>hours = {props.hours}</p>
      <p>Booth = {props.booth}</p>
    </React.Fragment>
  );
}

export default Location;

// day: "Sunday",
// location: "Lents International",
// hours: "9:00am - 2:00pm",
// booth: "4A"
