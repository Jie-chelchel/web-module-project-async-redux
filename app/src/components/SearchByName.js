import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchByName } from "../action";
import styled from "styled-components";

const FetchByName = (props) => {
  const [name, setName] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  };
  const searchHandler = () => {
    setName("");
    props.nameQuotes();
  };

  return (
    <SearchStyle>
      <input
        type="text"
        value={name}
        name="inputName"
        placeholder="Enter a name to search quote, i.e. Sansa"
        onChange={handleInput}
      />
      <button onClick={searchHandler}>Search</button>
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  background: #05665e;
  width: 80%;
  margin: 1rem auto;
  // height: 20vh;
  color: black;

  & input {
    background: white;
    width: 60%;
    color: black;
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
  }

  & button {
    padding: 0.5rem 2rem;
    margin: 0.2rem auto;
  }
`;

const mapStateToProps = (state) => {
  console.log(state.randomReducer);
  return {
    nameQuotes: state.randomReducer.randomQuotes,
  };
};

export default connect(mapStateToProps)(FetchByName);
