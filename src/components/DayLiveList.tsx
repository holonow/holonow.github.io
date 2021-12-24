import React from 'react';

import { LiveGroup } from '../types';
import LiveBox from './LiveBox';
import PageReloadButton from './PageReloadButton';

interface Props {
  dayGroup: LiveGroup
}

function DayLiveList({ dayGroup }: Props) {
  const { lives, date } = dayGroup;

  const boxes = lives.map((live) => (
    <LiveBox key={live.videoId} live={live} />
  ));

  return (
    <section className="mt-2 pb-4 border-b border-solid border-[#444]">
      <div className="w-full flex justify-center items-center">
        <h2 className="px-2 py-1 text-lg font-bold font leading-tight">
          <time>{date}</time>
        </h2>
        <PageReloadButton />
      </div>
      <div className="flex flex-wrap justify-center">
        {boxes}
      </div>
    </section>
  );
}

export default DayLiveList;
