import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const styles = css`
  ${emotionNormalize}

  :root {
    --bg-color: #181818;
    --main-text-color: white;
    --second-text-color: #AAA;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--second-text-color);
    background-color: #181818;
  }

  a {
    color: var(--second-text-color);
  }

  a:hover {
    color: lightskyblue;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--main-text-color);
  }
`;

export default function () {
  return <Global styles={styles} />;
}
