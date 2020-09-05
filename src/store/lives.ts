import { atom, selector } from 'recoil';
import { Live } from '../types';

interface LiveState {
  updatedAt: Date | null;
  lives: Live[];
}

const defaultState: LiveState = {
  updatedAt: null,
  lives: [],
};

const lives = atom({
  key: 'lives',
  default: defaultState,
});

export const incomingLives = selector({
  key: 'incomingLives',
  get: ({ get }) => {
    const state = get(lives);

    const aHourBefore = Date.now() - 3600 * 1000;
    return state.lives.filter((live) => (
      live.streaming || live.time.valueOf() > aHourBefore
    ));
  },
});

export default lives;
