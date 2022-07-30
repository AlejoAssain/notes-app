import React from 'react';
import styled from "styled-components"
import AppLogo from './AppLogo';
import UserData from './UserData';


const NavbarWrapper = styled.div`
  z-index: 10;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  background-color: #333;
`

const Navbar = () => {
  return (
    <NavbarWrapper>
      <AppLogo />
      <UserData />
    </NavbarWrapper>
  );
}

export default Navbar;
