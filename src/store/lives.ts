import { atom } from 'recoil';
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

export default lives;
