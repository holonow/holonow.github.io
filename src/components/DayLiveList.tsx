import React from 'react';
import styled from '@emotion/styled';

import { LiveGroup } from '../types';
import LiveBox from './LiveBox';
import PageReloadButton from './PageReloadButton';

interface Props {
  dayGroup: LiveGroup
}

const DateDiv = styled.div`
  text-align: center;
`;

const TimeH2 = styled.h2`
  display: inline-block;
  padding: .5rem;
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Section = styled.section`
  border-bottom: solid 1px #444;
  margin-top: .5rem;
  padding-bottom: 1rem;
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
      <DateDiv>
        <TimeH2>
          <time>{date}</time>
        </TimeH2>
        <PageReloadButton />
      </DateDiv>
      <LiveContainer>
        {boxes}
      </LiveContainer>
    </Section>
  );
}

export default DayLiveList;
