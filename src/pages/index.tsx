import React from 'react';
import { useRecoilValue } from 'recoil';

import { groupByDay } from '../util/groupByDay';
import { incomingLives } from '../store/lives';
import DayLiveList from '../components/DayLiveList';

function LiveFancyList() {
  const lives = useRecoilValue(incomingLives);
  const groups = groupByDay(lives);

  const groupNodes = groups.map((group) => (
    <DayLiveList key={group.date} dayGroup={group} />
  ));

  return (
    <div className="Lives">
      {groupNodes}
    </div>
  );
}

export default LiveFancyList;
