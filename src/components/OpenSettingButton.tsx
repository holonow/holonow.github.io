import React from 'react';
import { useSetRecoilState } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { showSettingsState } from '../store/ui';

function OpenSettingsButton() {
  const setShow = useSetRecoilState(showSettingsState);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <button
      type="button" aria-label="setting"
      style={{ width: '1.5rem' }} onClick={handleClick}
    >
      <FontAwesomeIcon size="xs" icon={faCog} />
    </button>
  );
}

export default OpenSettingsButton;
