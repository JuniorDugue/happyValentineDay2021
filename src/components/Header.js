import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  height: 600px;
  background: #575757;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)``

const NavItems = styled.div``;

const NavbarLinks = styled(Link)`
  color: #fff;
`;


const Header = () => {
  return (
    <Navbar>
      <Logo to="/">2021 Valentine Day</Logo>
      <NavItems>
        <NavbarLinks to="/">Home</NavbarLinks>
        <NavbarLinks to="/plans">Plans</NavbarLinks>
        <NavbarLinks to="/about">About</NavbarLinks>
        <NavbarLinks to="/contact">Contact</NavbarLinks>
      </NavItems>
    </Navbar>
  );
};

export default Header;
