import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import TextPagesContainer from './TextPagesContainer';

const GitHubLink = () => (
  // eslint-disable-next-line react/jsx-no-target-blank
  <a target="_blank" href="https://github.com/holonow/holonow.github.io">
    <FontAwesomeIcon icon={faGithub} />
    {' '}
    GitHub
  </a>
);

function About() {
  return (
    <TextPagesContainer>
      <h2>About Holo Now</h2>
      <p>
        Unofficial Hololive schedule viewer.
      </p>
      <p>
        Checkout source code at
        {' '}
        <GitHubLink />
      </p>
    </TextPagesContainer>
  );
}

export default About;
