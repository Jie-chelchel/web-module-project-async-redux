import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: auto;
  height: 25rem;
  background-color: #8a2b06;
  color: white;
  & .header {
    display: flex;
    height: 5rem;
    padding-top: 2.5rem;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.5rem;
    @media (max-width: 930px) {
      flex-direction: column;
      padding-bottom: 3rem;
    }
  }

  & .headerImg {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    @media (max-width: 930px) {
      height: 13rem;
    }
  }
  & h1 {
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 3rem;
  }
  & h1 img {
    height: 40px;
    width: 40px;
    margin-right: 1rem;
  }
  & a {
    color: white;
    text-decoration: none;
    margin: 0.5rem;
    font-weight: bold;
    background: #8ac2cf;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
  & a:hover {
    transform: scale(1.5);
    background: #41acc4;
  }
`;
const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <h1>Quotes from Game of Thrones</h1>
      </div>

      <img
        className="headerImg"
        alt="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Tpw76LB7MZ0yZfFSHrkSgONma-7RTiMM6g&usqp=CAU"
      />
    </HeaderStyle>
  );
};

export default Header;
