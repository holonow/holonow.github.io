import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { showSettingsState, showTitleState } from '../store/ui';
import { livesFilter } from '../store/lives';

import Radio from './Radio';

interface ModalProps {
  open: boolean
}

const Modal = styled.div`
  display: ${(props: ModalProps) => (props.open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

const CloseButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: .5rem;
  padding-right: .5rem;
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
`;

const RadioSet = styled(Fieldset)`
  input {
    margin-right: .25rem;
    margin-left: 1rem;
  }
`;

function Settings() {
  const [show, setShow] = useRecoilState(showSettingsState);
  const [filter, setFilter] = useRecoilState(livesFilter);
  const [showTitle, setShowTitle] = useRecoilState(showTitleState);

  const close = () => setShow(false);
  const handleTimeLabelClick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setFilter((state) => ({
      ...state,
      startFrom: (value as 'today'|'default'),
    }));
  };

  return (
    <Modal open={show}>
      <SettingsDiv>
        <CloseButtonDiv>
          <FontAwesomeIcon onClick={close} icon={faTimes} />
        </CloseButtonDiv>
        <ContentDiv>
          <h3>Filter</h3>
          <RadioSet>
            Time
            <Radio
              label="default"
              checked={filter.startFrom === 'default'}
              onChange={handleTimeLabelClick}
            />
            <Radio
              label="today"
              checked={filter.startFrom === 'today'}
              onChange={handleTimeLabelClick}
            />
          </RadioSet>
          <h3>Display</h3>
          <Fieldset>
            <label>
              <input
                type="checkbox"
                checked={showTitle}
                onChange={() => { setShowTitle((x) => !x); }}
              />
              Video Title
            </label>
          </Fieldset>
        </ContentDiv>
      </SettingsDiv>
    </Modal>
  );
}

export default Settings;
