import dayjs from 'dayjs';
import { LiveGroup, Live } from '../types';

export function groupByDay(lives: Live[]): LiveGroup[] {
  const groups: Record<string, LiveGroup> = {};
  lives.forEach((live) => {
    const { time } = live;
    const date = dayjs(time).format('YYYY/MM/DD');

    if (!groups[date]) {
      groups[date] = {
        date,
        lives: [],
      };
    }

    groups[date].lives.push(live);
  });

  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, value]) => (value));
}
