import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import livesAtom from '../store/lives';
import liverImages from '../store/liverImages';
import { Live, LiverImgMap } from '../types';

async function getLives(): Promise<Live[]> {
  const res = await fetch('https://holonow.github.io/holo-data/schedule.json');
  const lives = await res.json();
  if (!Array.isArray(lives)) {
    throw new Error('Get lives failed');
  }

  return lives.map((live) => ({
    ...live,
    time: new Date(live.time),
  }));
}

async function getImgMap(): Promise<LiverImgMap> {
  const res = await fetch('https://holonow.github.io/holo-data/imageMap.json');
  const data = await res.json();
  if (!data['赤井はあと']) {
    throw new Error('Get image map failed');
  }

  return data;
}

function useUpdateLives() {
  const [liveState, setLiveState] = useRecoilState(livesAtom);

  const initLives = useCallback(async () => {
    const { updatedAt } = liveState;
    if (updatedAt) { return; }

    const lives = await getLives();
    setLiveState(() => ({
      lives,
      updatedAt: new Date(),
    }));
  }, [liveState, setLiveState]);

  useEffect(() => { initLives(); }, [initLives]);
}

function useUpdateLiverImages() {
  const [liverImagesState, setLiverImages] = useRecoilState(liverImages);

  const initImgMap = useCallback(async () => {
    const { updatedAt } = liverImagesState;
    if (updatedAt) { return; }

    const map = await getImgMap();
    setLiverImages(() => ({
      liverImageMap: map,
      updatedAt: new Date(),
    }));
  }, [liverImagesState, setLiverImages]);

  useEffect(() => { initImgMap(); }, [initImgMap]);
}

function AppEffect() {
  useUpdateLives();
  useUpdateLiverImages();

  return null;
}

export default AppEffect;
