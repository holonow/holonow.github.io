import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import { incomingLives } from '../store/lives';
import { groupByDay } from '../util/groupByDay';
import LiveText from './LiveText';

const ListContainer = styled.div`
  padding: 0 clamp(.25rem, 2vw, 1rem);
`;

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
    <ListContainer className="LiveList">
      {groupNodes}
    </ListContainer>
  );
}

export default LiveTextList;
