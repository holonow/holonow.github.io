import { atom } from 'recoil';

const defaultShowSettingState = false;
export const showSettingsState = atom({
  key: 'ui/showSettings',
  default: defaultShowSettingState,
});

const defaultShowTitleState = true;
export const showTitleState = atom({
  key: 'ui/showLiveTitle',
  default: defaultShowTitleState,
});
