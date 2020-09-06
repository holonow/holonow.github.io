import React from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

import { Live } from '../types';

const LiveBlock = styled.div`
  margin-bottom: .5rem;
  color: var(--main-text-color);
`;

interface Props {
  live: Live
}

function LiveText(props: Props) {
  const { live } = props;
  const {
    time, streamer, guests, videoId,
  } = live;

  const link = `https://youtu.be/${videoId}`;

  const timeStr = dayjs(time).format('HH:mm');
  const names = [streamer, ...guests];

  return (
    <LiveBlock className="LiveText">
      <time>{timeStr}</time>
      <br />
      {names.join('、')}
      <br />
      <a href={link}>{link}</a>
    </LiveBlock>
  );
}

export default LiveText;
