import React from 'react';
import { Live } from '../types';

interface Props {
  live: Live
}
function LiveBox({ live }: Props) {
  const {
    link, livePreviewImage, time, streamer, guests,
  } = live;
  const names = [streamer, ...guests];

  return (
    <div>
      {time.toLocaleTimeString()}
      <br />
      {names.join(' ')}
      <br />
      <a href={link}>
        <img alt="video-preview" src={livePreviewImage} />
      </a>
      <br />
    </div>
  );
}

export default LiveBox;
