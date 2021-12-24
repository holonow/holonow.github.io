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
      <style jsx>{`
        fieldset {
          border: none;
          padding-left: 0;
          margin-left: 0;
        }

        h3 {
          margin: 0;
        }

        .setting {
          background-color: #333;
          border: 1px solid #555;
          margin: 2rem auto;
          width: clamp(0px, 90%, 800px);
        }
      `}</style>
      <div className="setting">
        <div className="flex flex-row-reverse p-2">
          <div role="button" aria-label="close" style={{ width: '1rem' }} onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="p-4 pt-0">
          <h3>フィルター</h3>
          <fieldset>
            今日のライブ
            <Switch onChange={handleTimeFilterChange} checked={filter.startFrom === 'today'} />
          </fieldset>
          <VtuberSelector />
          <h3>設定</h3>
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
