import React from 'react';
import styled from 'styled-components';

const StyledSettings = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;

  .btn {
    background-color: #EA9F95;
    color: white;
    width: 60%;
    height: 44px;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .genre__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

        <button type="submit" className="btn">Moviemize</button>
      </form>
    </StyledSettings>
  );
}

export default Settings;
