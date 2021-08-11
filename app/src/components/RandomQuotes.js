import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchRandom from "../action";
import styled from "styled-components";

const RandomQuotes = (props) => {
  // useEffect(() => {
  //   props.fetchRandom();
  // }, []);

  const fetchRandomHandler = () => {
    props.fetchRandom();
  };

  return (
    <RandomStyle>
      <button onClick={fetchRandomHandler}>
        Click me to check some random quotes!
      </button>
      <div className="container">
        <h4>{props.randomQuotes[0] ? props.randomQuotes[0].sentence : ""}</h4>
        <div>
          {props.randomQuotes[0]
            ? `By: ${props.randomQuotes[0].character.name}`
            : ""}
        </div>
        <div>
          {props.randomQuotes[0]
            ? props.randomQuotes[0].character.house.name
            : ""}
        </div>
      </div>
    </RandomStyle>
  );
};

const mapStateToProps = (state) => {
  console.log(state.randomReducer);
  return {
    randomQuotes: state.randomReducer.randomQuotes,
  };
};

const RandomStyle = styled.div`
  background: #05665e;
  width: 80%;
  margin: 1rem auto;
  // height: 20vh;


  & button{
    background: #05665e;
    padding: 1rem 2rem;
    margin: 3rem
    border-radius: 15px;
    border: none;
    color: white;
    font-size: 1.5rem;
  }
`;
export default connect(mapStateToProps, { fetchRandom })(RandomQuotes);
