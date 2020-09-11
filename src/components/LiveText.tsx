import React from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { Live } from '../types';
import { showTitleState } from '../store/ui';

const LiveBlock = styled.div`
  color: var(--main-text-color);
`;

interface Props {
  live: Live
}

function LiveText(props: Props) {
  const { live } = props;
  const {
    time, streamer, guests, videoId, title,
  } = live;
  const showTitle = useRecoilValue(showTitleState) && Boolean(title);

  const link = `https://youtu.be/${videoId}`;

  const timeStr = dayjs(time).format('HH:mm');
  const names = [streamer, ...guests];

  return (
    <LiveBlock className="LiveText">
      <time>{timeStr}</time>
      <br />
      {names.join('、')}
      {showTitle && <br />}
      {showTitle && title}
      <br />
      <a href={link}>{link}</a>
      <br />
      <br />
    </LiveBlock>
  );
}

export default LiveText;
