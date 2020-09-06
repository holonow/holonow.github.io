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

const livesAtom = atom({
  key: 'lives',
  default: defaultState,
});

type StartFrom = 'default' | 'today'
export interface FilterState {
  startFrom: StartFrom
  allVtubers: boolean
  vtubers: string[]
}

const defaultFilterState: FilterState = {
  startFrom: 'default',
  vtubers: [],
  allVtubers: true,
};

export const livesFilter = atom({
  key: 'lives/filter',
  default: defaultFilterState,
});

function filterByTime(lives: Live[], filter: FilterState) {
  const { startFrom } = filter;

  if (startFrom === 'today') {
    const today = new Date().getDate();

    return lives.filter((live) => (
      live.time.getDate() === today
    ));
  }

  // default filter
  const aHourBefore = Date.now() - 3600 * 1000;
  return lives.filter((live) => (
    live.streaming || live.time.valueOf() > aHourBefore
  ));
}

function filterByMember(lives: Live[], filter: FilterState) {
  const { vtubers, allVtubers } = filter;
  if (allVtubers) {
    return lives;
  }

  const set = new Set(vtubers);
  return lives.filter((x) => (
    set.has(x.streamer) || x.guests.some((guest) => set.has(guest))
  ));
}

function filterLives(lives: Live[], filter: FilterState): Live[] {
  const filtered = filterByTime(lives, filter);
  return filterByMember(filtered, filter);
}

export const incomingLives = selector({
  key: 'lives/incomingLives',
  get: ({ get }) => {
    const state = get(livesAtom);
    const filter = get(livesFilter);

    return filterLives(state.lives, filter);
  },
});

export default livesAtom;
