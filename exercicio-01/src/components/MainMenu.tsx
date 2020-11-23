import React from 'react';
import styled from 'styled-components';

export const MainMenu : React.FC = () => (
  <MainMenuList>
    <li><a href="/#top1">Lorem ipsum dolor</a></li>
    <li><a href="/#top2">sit amet</a></li>
    <li><a href="/#top3">consectetur adipiscing</a></li>
    <li><a href="/#top4">Nullam non</a></li>
  </MainMenuList>
);

const MainMenuList = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin-right: 16px;
  }
`
