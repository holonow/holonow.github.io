import React from 'react';
import { useRecoilValue } from 'recoil';

import { incomingLives } from '../store/lives';
import LiveText from './LiveText';

function LiveList() {
  const lives = useRecoilValue(incomingLives);

  return (
    <div className="LiveList">
      {lives.map((live) => (
        <LiveText live={live} />
      ))}
    </div>
  );
}

export default LiveList;
