import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
  background: black;
  padding: 20px;
  display: flex;
  height: 1px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
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
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: #fca311;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.7s ease-in-out, transform 0.2s ease;

  &:hover {
    color: #e57600;
    text-decoration-color: antiquewhite;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;

  ${NavItem}:hover & {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownItem = styled(NavLink)`
  color: black;
  font-weight: normal;
  font-size: 14px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  padding: 10px;
  position: relative;
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 9999;
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.5s ease-in-out
    forwards;

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
          <NavLink to="/Dashboard" onClick={handleLinkClick}>
            Dashboard
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
          <Dropdown>
            <DropdownItem to="/marks/report">Report</DropdownItem>
            <DropdownItem to="/marks/graph">Graph</DropdownItem>
          </Dropdown>
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
          <Dropdown>
            <DropdownItem to="/timetable/week">Weekly</DropdownItem>
            <DropdownItem to="/timetable/month">Monthly</DropdownItem>
          </Dropdown>
        </NavItem>
      </NavList>
      <HamburgerIcon onClick={toggleMenu}>S</HamburgerIcon>
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
          <Dropdown>
            <DropdownItem to="/marks/report">Report</DropdownItem>
            <DropdownItem to="/marks/graph">Graph</DropdownItem>
          </Dropdown>
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
          <Dropdown>
            <DropdownItem to="/timetable/week">Weekly</DropdownItem>
            <DropdownItem to="/timetable/month">Monthly</DropdownItem>
          </Dropdown>
        </HamburgerMenuItem>
      </HamburgerMenu>
    </Nav>
  );
}

export default Navbar;
