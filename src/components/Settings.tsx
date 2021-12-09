import React from 'react';
import styled from '@emotion/styled';
import produce from 'immer';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { showSettingsState, showTitleState } from '../store/ui';
import { livesFilter } from '../store/lives';

import Modal from './Modal';
import Switch from './Switch';
import VtuberSelector from './VtuberSelector';

const CloseButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: .5rem;
`;

const SettingsDiv = styled.div`
  background-color: #333;
  border: 1px solid #555;
  margin: 2rem auto;
  width: clamp(0px, 90%, 800px);

  h3 {
    margin: 0;
  }
`;

const ContentDiv = styled.div`
  padding: 1rem;
  padding-top: 0;
`;

const Fieldset = styled.fieldset`
  border: none;
  padding-left: 0;
  margin-left: 0;
`;

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
      <SettingsDiv>
        <CloseButtonDiv>
          <div role="button" aria-label="close" style={{ width: '1rem' }} onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </CloseButtonDiv>
        <ContentDiv>
          <h3>フィルター</h3>
          <Fieldset>
            今日のライブ
            <Switch onChange={handleTimeFilterChange} checked={filter.startFrom === 'today'} />
          </Fieldset>
          <VtuberSelector />
          <h3>設定</h3>
          <Fieldset>
            タイトルを表示
            <Switch onChange={() => { setShowTitle((x) => !x); }} checked={showTitle} />
          </Fieldset>
        </ContentDiv>
      </SettingsDiv>
    </Modal>
  );
}

export default Settings;
