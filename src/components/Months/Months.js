import React from "react";
import Produce from "./Produce";
import seasonalProducts from "../Data/SeasonalProduce.js";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = seasonalProducts[12];
  }

  handleClick = (index) => {
    this.setState(seasonalProducts[index]);
  };
  
  handleAlignment = (event, newAlignment) => {
    // if (newAlignment !== null) {
    //   setAlignment(newAlignment);
    // }
    console.log(event.target);
  };


  render(){
    return(
      <React.Fragment>
        <div className="months-box">
          <div className="months-box--menu">
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button  className="active" onClick={() => this.handleClick(0)}>January</Button>
              <Button onClick={() => this.handleClick(1)}>February</Button>
              <Button onClick={() => this.handleClick(2)}>March</Button>
              <Button onClick={() => this.handleClick(3)}>April</Button>
              <Button onClick={() => this.handleClick(4)}>May</Button>
              <Button onClick={() => this.handleClick(5)}>June</Button>
              <Button onClick={() => this.handleClick(6)}>July</Button>
              <Button onClick={() => this.handleClick(7)}>August</Button>
              <Button onClick={() => this.handleClick(8)}>September</Button>
              <Button onClick={() => this.handleClick(9)}>October</Button>
              <Button onClick={() => this.handleClick(10)}>November</Button>
              <Button onClick={() => this.handleClick(11)}>December</Button>
            </ButtonGroup>
          </div>

          <div className="months-box--produce">
            {this.state.selection.map((product) => 
              <Produce name={product}  /> 
            )}
          </div>
        </div>

      </React.Fragment>
    )
  }
}

  
export default Months;
