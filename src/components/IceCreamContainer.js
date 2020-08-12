import React from "react";
import { buyIcream } from "../redux";
import { connect } from "react-redux";
const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of IceCreams -{props.numOfIceCreams}</h2>
      <button onClick={props.buyIcream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // this function take state as parameter from redux store and return an object
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};
const mapDispatchToProps = (dispatch) => {
  //this function get redux dispatch method as a parameter and return an bojec
  return {
    buyIcream: () => dispatch(buyIcream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
