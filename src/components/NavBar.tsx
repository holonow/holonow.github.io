import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import OpenSettingButton from './OpenSettingButton';

const JsonLink = () => (
  // eslint-disable-next-line react/jsx-no-target-blank
  <a target="_blank" href="https://holonow.github.io/holo-data/schedule.json">
    JSON
  </a>
);

function NavBar() {
  return (
    <nav className={styles['nav-bar']}>
      <ul className="flex gap-2">
        <li>
          <Link href="/">
            <a style={{ fontWeight: 'bold' }}>
              [Holo Now]
            </a>
          </Link>
        </li>
        <li>
          <Link href="/text">Text</Link>
        </li>
        <li>
          <JsonLink />
        </li>
      </ul>
      <ul className="flex gap-2 items-center">
        <li>
          <Link href="/about">
            <a className="w-4">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </a>
          </Link>
        </li>
        <li>
          <OpenSettingButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
