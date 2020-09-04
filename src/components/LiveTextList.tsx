import React from 'react';
import { useRecoilValue } from 'recoil';

import livesAtom from '../store/lives';
import LiveText from './LiveText';

function LiveList() {
  const liveState = useRecoilValue(livesAtom);
  const { lives } = liveState;
  return (
    <div className="LiveList">
      {lives.map((live) => (
        <LiveText live={live} />
      ))}
    </div>
  );
}

export default LiveList;
