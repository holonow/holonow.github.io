import React from 'react';
import dayjs from 'dayjs';

import { Live } from '../types';

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
    <div className="LiveText">
      {timeStr}
      <br />
      {names.join(' ')}
      <br />
      <a href={link}>{link}</a>
    </div>
  );
}

export default LiveText;
