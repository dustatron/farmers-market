import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function AddMarket(props) {
  function handleSubmitDay(event) {
    event.preventDefault();
    props.onSubmitDayForm({
      day: event.target.day.value,
      location: event.target.location.value,
      booth: event.target.booth.value,
      hours: event.target.hours.value,
      img: event.target.img.value,
      id: v4()
    });
  }

  return (
    <form className="commentForm" onSubmit={handleSubmitDay}>
      <div>
        <TextField type="text" name="day" placeholder="Day" />
      </div>
      <div>
        <TextField type="text" name="location" placeholder="Locaiton" />
      </div>
      <div>
        <TextField type="text" name="hours" placeholder="Hours" />
      </div>
      <div>
        <TextField type="text" name="booth" placeholder="Booth number" />
      </div>
      <div>
        <TextField type="text" name="img" placeholder="Image Link" />
      </div>
      <div>
        <Button variant="contained" size="large" type="submit" value="Post" color="primary">
          Add
        </Button>
      </div>
    </form>
  );
}

AddMarket.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
  img: PropTypes.string
};
export default AddMarket;
