import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Location(props) {
  return (
    <React.Fragment>
      <h4> {props.day} </h4>
      <hr />
      <strong>Location</strong>
      <p>{props.location}</p>
      <hr />
      <strong>Hours</strong>
      <p>{props.hours}</p>
      <hr />
      <strong>Booth</strong>
      <p>{props.booth}</p>
      {props.onDayDelete ? (
        <Button
          variant="contained"
          size="large"
          type="submit"
          value="Post"
          color="secondary"
          onClick={() => props.onDayDelete(props.id)}
        >
          Destroy
        </Button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
  onDayDelete: PropTypes.func,
  id: PropTypes.string
};
export default Location;

// day: "Sunday",
// location: "Lents International",
// hours: "9:00am - 2:00pm",
// booth: "4A"
