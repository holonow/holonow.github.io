import React from 'react';
import { useRecoilValue } from 'recoil';

import { incomingLives } from '../store/lives';
import { groupByDay } from '../util/groupByDay';
import LiveText from './LiveText';

function LiveList() {
  const allLives = useRecoilValue(incomingLives);
  const groups = groupByDay(allLives);

  const groupNodes = groups.map(({ date, lives }) => {
    const liveNodes = lives.map((live) => (
      <LiveText live={live} />
    ));
    return (
      <div key={date}>
        <h2>{date}</h2>
        {liveNodes}
      </div>
    );
  });

  return (
    <div className="LiveList">
      {groupNodes}
    </div>
  );
}

export default LiveList;
