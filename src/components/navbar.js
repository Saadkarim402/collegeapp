import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
  background-color: #f2f2f2;
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

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #555;
  }
`

function Navbar() {
  return (
       <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="TodoList">Todo List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/scheduler">Scheduler</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/marks">Marks Manager</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/attendance">Attendance</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/timetable">Timetable</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
