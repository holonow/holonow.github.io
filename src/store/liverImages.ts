import { atom } from 'recoil';
import { LiverImgMap } from '../types';

interface LiverImage {
  updatedAt: Date | null;
  liverImageMap: LiverImgMap;
}

const defaultState: LiverImage = {
  updatedAt: null,
  liverImageMap: {},
};

const liverImages = atom({
  key: 'liveImages',
  default: defaultState,
});

export default liverImages;
