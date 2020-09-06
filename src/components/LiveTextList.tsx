import React from 'react';
import { useRecoilValue } from 'recoil';

import { incomingLives } from '../store/lives';
import { groupByDay } from '../util/groupByDay';
import LiveText from './LiveText';
import TextPagesContainer from './TextPagesContainer';

function LiveTextList() {
  const allLives = useRecoilValue(incomingLives);
  const groups = groupByDay(allLives);

  const groupNodes = groups.map(({ date, lives }) => {
    const liveNodes = lives.map((live) => (
      <LiveText key={live.videoId} live={live} />
    ));

    return (
      <section key={date}>
        <h2>{date}</h2>
        {liveNodes}
      </section>
    );
  });

  return (
    <TextPagesContainer className="LiveList">
      {groupNodes}
    </TextPagesContainer>
  );
}

export default LiveTextList;
