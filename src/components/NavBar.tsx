import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const Nav = styled.nav`
  padding-left: clamp(.5rem, 2vw, 1rem);
  padding-right: clamp(.5rem, 2vw, 1rem);
  background-color: #333;

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

const LeftUl = styled.ul`
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li {
    float: left;
  }
`;

const RightUl = styled(LeftUl)`
  float: none;
  li {
    float: right;
  }
`;

const JsonLink = () => (
  // eslint-disable-next-line react/jsx-no-target-blank
  <a target="_blank" href="https://holonow.github.io/holo-data/schedule.json">
    JSON
  </a>
);

function NavBar() {
  return (
    <Nav>
      <LeftUl>
        <li>
          <Link style={{ fontWeight: 'bold' }} to="/">[Holo Now]</Link>
        </li>
        <li>
          <Link to="/text">Text</Link>
        </li>
        <li>
          <JsonLink />
        </li>
      </LeftUl>
      <RightUl>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Link>
        </li>
      </RightUl>
    </Nav>
  );
}

export default NavBar;
