import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import livesAtom from '../store/lives';
import { Live } from '../types';

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

function AppEffect() {
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

  return null;
}

export default AppEffect;
