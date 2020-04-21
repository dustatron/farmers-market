import React from "react";
import "./Months.css";

const Produce = (props) => {
  return (
    <React.Fragment>
      <div className="produce-box">
      <p> {props.name} </p>
      <img src={"https://loremflickr.com/200/180/"+ props.name} />
        
      </div>
    </React.Fragment>
  );
};

export default Produce;