import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  padding-left: clamp(.5rem, 2vw, 1rem);
  padding-right: clamp(.5rem, 2vw, 1rem);
  background-color: #333;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Li = styled.li`
  float: left;

  a {
  display: block;
  padding: 5px;
  color: white;
  text-decoration: none;
  }

  a:hover {
    background-color: black;
  }
`;

function NavBar() {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link style={{ fontWeight: 'bold' }} to="/">[Holo now]</Link>
        </Li>
        <Li>
          <Link to="/text">Text</Link>
        </Li>
        <Li>
          <a target="_blank" rel="noreferrer noopener" href="https://holonow.github.io/holo-data/schedule.json">
            JSON
          </a>
        </Li>
      </Ul>
    </Nav>
  );
}

export default NavBar;
