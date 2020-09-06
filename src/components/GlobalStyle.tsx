import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const styles = css`
  ${emotionNormalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: #EEE;
    background-color: #121212;
  }

  a {
    color: lightskyblue;
  }
`;

export default function () {
  return <Global styles={styles} />;
}
