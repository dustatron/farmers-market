import React from "react";

function Photo(props) {
  return (
    <React.Fragment>
      <div className="marcket-img-box">
        <img className="marcket-img" src={props.img} alt="location" />
      </div>
    </React.Fragment>
  );
}

export default Photo;
