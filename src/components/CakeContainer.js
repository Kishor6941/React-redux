import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes -{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // this function take state as parameter from redux store and return an object
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  //this function get redux dispatch method as a parameter and return an bojec
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
