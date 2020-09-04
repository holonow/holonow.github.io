import React from 'react';
import { useRecoilValue } from 'recoil';

import { incomingLives } from '../store/lives';

function LiveFancyList() {
  const lives = useRecoilValue(incomingLives);

  const blocks = lives.map((live) => {
    const {
      link, livePreviewImage, time, streamer, guests,
    } = live;
    const names = [streamer, ...guests];
    return (
      <div key={live.link}>
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
  });

  return (
    <>
      {blocks}
    </>
  );
}

export default LiveFancyList;
