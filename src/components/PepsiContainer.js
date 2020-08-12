import React from "react";
import { buyPepsi } from "../redux";
import { connect } from "react-redux";

const PepsiContainer = (props) => {
  return (
    <div>
      <h2>Num Of Pepsi --{props.numOfPepsi}</h2>
      <button onClick={props.buyPepsi}>Buy Pepsi</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPepsi: state.pepsi.numOfPepsi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyPepsi: () => dispatch(buyPepsi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PepsiContainer);
