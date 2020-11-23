import React from "react";

export const NavMenu = ({items} : any) => (
  <nav className="main-nav">
    <ul>
        {items.map((item : any) => (
            <li>
                <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
            </li>
        ))}
    </ul>
  </nav>
);
