import React from "react";
import { connect } from "react-redux";
import fetchRandom from "../action";
import { props } from "bluebird";

const RandomQuotes = (props) => {
  const fetchRandomHandler = () => {
    props.fetchRandom();
  };
  console.log(props.randomQuotes);
  return (
    <div>
      <div onClick={fetchRandomHandler}>
        <h1>RandomQuotes</h1>
      </div>
      {props.randomQuotes.map((item, index) => {
        return (
          <div key={index}>
            <h4> House : {item.character.house.name}</h4>
            <h5> Name : {item.character.name}</h5>

            <p>{item.sentence}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.randomReducer);
  return {
    randomQuotes: state.randomReducer.randomQuotes,
  };
};

export default connect(mapStateToProps, { fetchRandom })(RandomQuotes);
