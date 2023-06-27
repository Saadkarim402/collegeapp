import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-right: 10px;
  padding-right: 30px;
  font-size: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    color: orange;
    text-decoration-color: antiquewhite;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    z-index: 1;
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 9999; /* Add a high z-index to ensure it appears on top */

  @media (min-width: 769px) {
    display: none;
  }
`;

const HamburgerMenuItem = styled(NavItem)`
  margin: 10px 0;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/TodoList" onClick={handleLinkClick}>
            Todo List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/scheduler" onClick={handleLinkClick}>
            Scheduler
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/marks" onClick={handleLinkClick}>
            Marks Manager
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/attendance" onClick={handleLinkClick}>
            Attendance
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/timetable" onClick={handleLinkClick}>
            Timetable
          </NavLink>
        </NavItem>
      </NavList>
      <HamburgerIcon onClick={toggleMenu}>
        S
      </HamburgerIcon>
      <HamburgerMenu isOpen={isOpen}>
        <HamburgerMenuItem>
          <NavLink to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <NavLink to="/TodoList" onClick={handleLinkClick}>
            Todo List
          </NavLink>
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <NavLink to="/scheduler" onClick={handleLinkClick}>
            Scheduler
          </NavLink>
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <NavLink to="/marks" onClick={handleLinkClick}>
            Marks Manager
          </NavLink>
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <NavLink to="/attendance" onClick={handleLinkClick}>
            Attendance
          </NavLink>
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <NavLink to="/timetable" onClick={handleLinkClick}>
            Timetable
          </NavLink>
        </HamburgerMenuItem>
      </HamburgerMenu>
    </Nav>
  );
}


export default Navbar;
