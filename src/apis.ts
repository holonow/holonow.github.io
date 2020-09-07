import { Live, LiverImgMap } from './types';

export async function getLives(): Promise<Live[]> {
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

export async function getImgMap(): Promise<LiverImgMap> {
  const res = await fetch('https://holonow.github.io/holo-data/imageMap.json');
  const data = await res.json();
  if (!data['赤井はあと']) {
    throw new Error('Get image map failed');
  }

  return data;
}
