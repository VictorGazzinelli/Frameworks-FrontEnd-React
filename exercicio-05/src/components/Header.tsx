import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { NavBar } from './Navbar';

function Header() {
  return (
    <>
    <HeaderWrapper className="header-wrapper">
      <div className="main-logo">
        <Logo />
      </div>
      <HeaderInfo className="header-info">
        <NavBar />
      </HeaderInfo>
    </HeaderWrapper>
    <hr />
    </>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex
`

const HeaderInfo = styled.div`
  width: 80%;
  text-align: right;
`