import React from "react";
import "./Months.css";

import CircularProgress from '@material-ui/core/CircularProgress';

class Produce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      loaded: false
    }
  }
  
  _onLoad = () => {
    this.setState(() => ({ loaded: true }))
  }

  render() {


    return (
      <React.Fragment>
       <div className="produce-box">
         <p> {this.state.props.name} </p>
         <hr/>
         <img src={"https://loremflickr.com/200/180/"+ this.state.props.name} alt="product" onLoad={this._onLoad} />
         
         {!this.state.loaded? <CircularProgress /> : ""}
        
       </div>
     </React.Fragment>
    );
  }
}

// const Produce = (props) => {
//   return (
//     <React.Fragment>
//       <div className="produce-box">
//         <p> {props.name} </p>
//         <hr/>
//         <img src={"https://loremflickr.com/200/180/"+ props.name} alt="product" />
//         {/* <CircularProgress /> */}
        
//       </div>
//     </React.Fragment>
//   );
// };

export default Produce;