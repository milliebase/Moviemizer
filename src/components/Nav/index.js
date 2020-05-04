import React from 'react';
import styled from 'styled-components';

import logo from './../../assets/images/moviemizer.png';

const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  background: linear-gradient(
    0deg,
   rgba(255,255,255,0) 2%,
   rgba(255,255,255,0) 12%,
   rgba(0,0,0,1) 86%);
  backdrop-filter: blur(0.4);

  img {
    padding-left: 5%;
    padding-top: 5%;
    width: 40%;
  }

  @media (min-width: 600px) {
    img {
      width: 20%;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="Moviemizer logo"/>
    </StyledNav>
  );
}

export default Nav;
