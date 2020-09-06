import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import OpenSettingButton from './OpenSettingButton';

const Nav = styled.nav`
  padding-left: clamp(.5rem, 2vw, 1rem);
  padding-right: clamp(.5rem, 2vw, 1rem);
  background-color: #333;

  a, button {
    display: block;
    padding: 5px;
    color: white;
    text-decoration: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }

  a:hover, button:hover {
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
        <li>
          <OpenSettingButton />
        </li>
      </RightUl>
    </Nav>
  );
}

export default NavBar;
