import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;

  &:hover {
    background: linear-gradient(-150deg, #d62121, #c72c2c, #3a1111);
  }
`;

const NavItems = styled.div``;

const NavbarLinks = styled(Link)`
  color: #fff;
  padding-left: 2rem;
  text-decoration: none;

  &:hover {
    background: linear-gradient(-150deg, #d62121, #c72c2c, #3a1111);
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">2021 Valentine Day</Logo>
      <NavItems>
        <NavbarLinks to="/">Home</NavbarLinks>
        <NavbarLinks to="/reasonTwo">Reason Two</NavbarLinks>
        <NavbarLinks to="/reasonThree">Reason Three</NavbarLinks>
        <NavbarLinks to="/reasonFour">Reason Four</NavbarLinks>
      </NavItems>
    </Navbar>
  );
};

export default Header;
