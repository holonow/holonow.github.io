import { atom } from 'recoil';

type ShowSettingsState = boolean

const defaultState: ShowSettingsState = true;
export const showSettingsState = atom({
  key: 'ui/showSettings',
  default: defaultState,
});
