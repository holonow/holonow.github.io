import { useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import livesAtom from '../store/lives';
import liverImages from '../store/liverImages';
import { getLives, getImgMap } from '../apis';

function useUpdateLives() {
  const setLiveState = useSetRecoilState(livesAtom);

  const updateLives = useCallback(async () => {
    const lives = await getLives();
    setLiveState(() => ({
      lives,
      updatedAt: new Date(),
    }));
  }, [setLiveState]);

  useEffect(() => {
    updateLives();
    const interval = setInterval(updateLives, 1000 * 60 * 5);
    return () => {
      clearInterval(interval);
    };
  }, [updateLives]);
}

function useUpdateLiverImages() {
  const setLiverImages = useSetRecoilState(liverImages);

  const updateImgMap = useCallback(async () => {
    const map = await getImgMap();
    setLiverImages(() => ({
      liverImageMap: map,
      updatedAt: new Date(),
    }));
  }, [setLiverImages]);

  useEffect(() => {
    updateImgMap();
    const interval = setInterval(updateImgMap, 1000 * 60 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [updateImgMap]);
}

function AppEffect() {
  useUpdateLives();
  useUpdateLiverImages();

  return null;
}

export default AppEffect;
