import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

import { Live } from '../types';

interface Props {
  live: Live
}

function LiveBox({ live }: Props) {
  const {
    link, livePreviewImage, time, streamer, guests, streaming, title,
  } = live;
  const names = [streamer, ...guests];
  const timeStr = dayjs(time).format('HH:mm');

  return (
    <div className="live-card">
      <strong>
        <time>{timeStr}</time>
      </strong>
      <a className="block" rel="noopener noreferrer" target="_blank" href={link}>
        {livePreviewImage && (
          <div className={`flex border-solid border-2 ${streaming ? 'border-red-600' : 'border-gray-600'}` }>
            <Image
              alt="video-preview" src={livePreviewImage}
              width="240"
              height="135"
              quality="95"
            />
          </div>
        )}
      </a>
      <div className="text-white">{names.join('、')}</div>
      <div className="overflow-hidden line-clamp-2 font-light">
        {title}
      </div>
    </div>
  );
}

export default LiveBox;
