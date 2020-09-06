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
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faCog} />
    </button>
  );
}

export default OpenSettingsButton;
