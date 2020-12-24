import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { RouteDetails, routes } from '../utils/routes'


export const NavBar = () => (
  <nav className="main-nav">
    <NavItemWrapper>
        {
          routes.filter((routeDetails : RouteDetails) => routeDetails.isVisible)
            .map((routeDetails : RouteDetails, index : number) => {
              return (
                <li key = {index}>
                  <Link to={routeDetails.path}>{routeDetails.name}</Link>
                </li>
              )
            })
        }
    </NavItemWrapper>
  </nav>
);

const NavItemWrapper = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin-right: 16px;
  }
`
