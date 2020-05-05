import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

import icon from './../../assets/images/moviemizer_icon.png';

const StyledMovieText = styled.div`
  padding-top: 20vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Passion One', cursive;
    padding: 0 8%;
  }

  h2 {
    font-family: 'Passion One', cursive;
    font-weight: normal;
  }

  .icon {
    width: 100%;
    height: 40vh;
    overflow: hidden;
  }

  @media (min-width: 600px) {
    height: 100vh;
    width: 100%;

    .icon {
      height: 50vh;
      margin-left: -10vw;
    }
  }
`;

const MovieText = (props) => {
  const isResult = props.showResult;

  if (!isResult) {
    return (
      <StyledMovieText className="text">
        <h1>Don't know what to watch?</h1>
        <h2>Find a random movie!</h2>

        <div className="icon">
          <img src={icon} alt="Moviemizer icon" />
        </div>
      </StyledMovieText>
    )
  } else {
    return(null);
  }
}

MovieText.propTypes = {
  showResult: PropTypes.bool
}

export default MovieText;
