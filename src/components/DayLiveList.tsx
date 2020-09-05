import React from 'react';
import styled from '@emotion/styled';

import { LiveGroup } from '../types';
import LiveBox from './LiveBox';

interface Props {
  dayGroup: LiveGroup
}

const Time = styled.time`
  display: block;
  font-weight: bold;
  padding: .5rem;
`;

const Section = styled.section`
  border-top: solid 1px gray;
  margin-top: .5rem;
`;

const LiveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function DayLiveList({ dayGroup }: Props) {
  const { lives, date } = dayGroup;

  const boxes = lives.map((live) => (
    <LiveBox key={live.videoId} live={live} />
  ));

  return (
    <Section>
      <Time>{date}</Time>
      <LiveContainer>
        {boxes}
      </LiveContainer>
    </Section>
  );
}

export default DayLiveList;
