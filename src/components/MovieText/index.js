import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledMovieText = styled.div`
  margin-top: 150px;
  padding: 5%;

  h1 {
    text-transform: uppercase;
  }

  h2 {
    font-weight: normal;
  }

  @media (min-width: 600px) {
    margin-top: 200px;
  }
`;

const MovieText = (props) => {
  const isResult = props.showResult;

  if (!isResult) {
    return (
      <StyledMovieText className="text">
        <h1>Don't know what to watch?</h1>
        <h2>Find a random movie!</h2>
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
