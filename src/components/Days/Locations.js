import React from "react";

function Location(props) {
  return (
    <React.Fragment>
      <h4> {props.day} </h4>
      <hr/>
      <strong>Location</strong>
      <p>{props.location}</p>
      <hr/>
      <strong>Hours</strong>
      <p>{props.hours}</p>
      <hr/>
      <strong>Booth</strong>
      <p>{props.booth}</p>
    </React.Fragment>
  );
}

export default Location;

// day: "Sunday",
// location: "Lents International",
// hours: "9:00am - 2:00pm",
// booth: "4A"
