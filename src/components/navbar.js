import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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

const ResponsiveNavList = styled(NavList)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ResponsiveNavItem = styled(NavItem)`
  padding-right: 0;
  margin-bottom: 10px;
`;

function Navbar() {
  return (
    <Nav>
      <ResponsiveNavList>
        <ResponsiveNavItem>
          <NavLink to="/">Home</NavLink>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <NavLink to="/TodoList">Todo List</NavLink>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <NavLink to="/scheduler">Scheduler</NavLink>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <NavLink to="/marks">Marks Manager</NavLink>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <NavLink to="/attendance">Attendance</NavLink>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <NavLink to="/timetable">Timetable</NavLink>
        </ResponsiveNavItem>
      </ResponsiveNavList>
    </Nav>
  );
}

export default Navbar;
