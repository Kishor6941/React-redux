import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes -{props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy{number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
