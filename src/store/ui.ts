import { atom } from 'recoil';

const defaultShowSettingState = true;
export const showSettingsState = atom({
  key: 'ui/showSettings',
  default: defaultShowSettingState,
});

const defaultShowTitleState = true;
export const showTitleState = atom({
  key: 'ui/showLiveTitle',
  default: defaultShowTitleState,
});
