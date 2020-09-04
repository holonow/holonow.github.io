import React from 'react';

import { Live } from '../types';

interface Props {
  live: Live
}

function LiveText(props: Props) {
  const { live } = props;
  const {
    time, streamer, guests, link,
  } = live;

  const timeStr = time.toLocaleString();
  const names = [streamer, ...guests];

  return (
    <div className="LiveText">
      {timeStr}
      <br />
      {names}
      <br />
      <a href={link}>{link}</a>
    </div>
  );
}

export default LiveText;
