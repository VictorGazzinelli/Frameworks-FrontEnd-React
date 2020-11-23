import React from 'react';
import styled from 'styled-components';
import { MainMenu } from './MainMenu';
import { SearchBar } from './SearchBar';

export const Header : React.FC = () => (
  <HeaderWrapper className="header-wrapper">
      <div className="main-logo">
        <h1><strong>Logo</strong></h1>
      </div>
      <HeaderInfo className="header-info">
        <MainMenu />
        <SearchBar />
      </HeaderInfo>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  display: flex
`

const HeaderInfo = styled.div`
  width: 80%;
  text-align: right;
`