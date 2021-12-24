import React from 'react';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';

import { Live } from '../types';
import { showTitleState } from '../store/ui';

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
    <div className="LiveText text-white">
      <time>{timeStr}</time>
      <br />
      {names.join('、')}
      {showTitle && <br />}
      {showTitle && title}
      <br />
      <a target="_blank" rel="noopener noreferrer" href={link}>{link}</a>
      <br />
      <br />
    </div>
  );
}

export default LiveText;
