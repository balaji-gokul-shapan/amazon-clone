import React from 'react';
import {
  NavBar,
  NavBarContent,
  NavHeader,
  LinkButtons,
  NavLink,
} from '../styles/theme/navbar';

import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const navLinks = [
    'Amazon Mini TV',
    'Sell',
    'Best Sellers',
    "Today's Deals",
    'Mobiles',
    'Electronics',
    'New Releases',
  ];
  const navigate = useNavigate();

  const handleLinkClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <NavHeader>
        <NavBar>
          {navLinks.map((link) => (
            <NavLink key={link} onClick={() => handleLinkClick(link)}>
              {link}
            </NavLink>
          ))}
        </NavBar>
      </NavHeader>
    </>
  );
};
