import React from 'react';
import produce from 'immer';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { showSettingsState, showTitleState } from '../store/ui';
import { livesFilter } from '../store/lives';

import Modal from './Modal';
import Switch from './Switch';
import VtuberSelector from './VtuberSelector';
import { cx } from '../util/cx';

function Settings() {
  const [show, setShow] = useRecoilState(showSettingsState);
  const [filter, setFilter] = useRecoilState(livesFilter);
  const [showTitle, setShowTitle] = useRecoilState(showTitleState);

  const close = () => setShow(false);
  const handleTimeFilterChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    setFilter(produce((draft) => {
      draft.startFrom = draft.startFrom === 'today' ? 'default' : 'today';
    }));
  };

  return (
    <Modal open={show}>
      <div className={cx(
        "bg-zinc-800 border border-solid border-zinc-500 my-8 mx-auto",
        "w-11/12 max-w-3xl min-w-[306px]")}
      >
        <div className="flex flex-row-reverse p-2">
          <div role="button" aria-label="close" style={{ width: '1rem' }} onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="p-4 pt-0">
          <h3 className="text-lg font-bold">フィルター</h3>
          <fieldset>
            今日のライブ
            <Switch onChange={handleTimeFilterChange} checked={filter.startFrom === 'today'} />
          </fieldset>
          <VtuberSelector />
          <h3 className="text-lg font-bold">設定</h3>
          <fieldset>
            タイトルを表示
            <Switch onChange={() => { setShowTitle((x) => !x); }} checked={showTitle} />
          </fieldset>
        </div>
      </div>
    </Modal>
  );
}

export default Settings;
