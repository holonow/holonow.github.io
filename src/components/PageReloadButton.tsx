import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import livesAtom from '../store/lives';
import { getLives } from '../apis';

function PageReloadButton() {
  const [loading, setLoading] = useState(false);
  const setLivesState = useSetRecoilState(livesAtom);

  const onButtonClick = async () => {
    if (loading) { return; }

    setLoading(true);

    const lives = await getLives();
    setLivesState({
      lives,
      updatedAt: new Date(),
    });

    // Make animation longer
    setTimeout(() => { setLoading(false); }, 1000);
  };

  return (
    <div
      role="button" aria-label="reload"
      onClick={onButtonClick}
      className={`inline-block w-4 cursor-pointer${loading ? ' animate-spin' : ''}`}
    >
      <FontAwesomeIcon icon={faSyncAlt} />
    </div>
  );
}

export default PageReloadButton;
