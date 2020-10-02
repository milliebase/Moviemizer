import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSettings = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8% 5%;
  position: fixed;
  z-index: 90;
  bottom: 0;

  .btn {
    background-color: #ea9f95;
    color: white;
    width: 60%;
    height: 44px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: "Passion One", cursive;
  }

  .genre__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 600px) {
    padding: 3%;

    .btn {
      width: 30%;
      height: 60px;
    }
  }
`;

const Settings = (props) => {
  return (
    <StyledSettings>
      {/* <h2>Pick a genre!</h2> */}

      <form className="genre__form" onSubmit={props.handleSubmit}>
        {/* {genres.map((item, key) => (
          <label key={key}>
            <input type="radio" name={item.name} value={item.id} />
            {item.name}
          </label>
        ))} */}

        <button type="submit" className="btn">
          Moviemize
        </button>
      </form>
    </StyledSettings>
  );
};

Settings.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Settings;
