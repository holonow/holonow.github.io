import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import produce from 'immer';
import Image from 'next/image';

import { HOLO_GROUPS } from '../util/memberList';
import { livesFilter, FilterState } from '../store/lives';
import liverImagesState from '../store/liverImages';
import Switch from './Switch';

interface ImageProps {
  selected: boolean;
}
const IconContainer = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid;
  border-color: ${(props: ImageProps) => (props.selected ? 'skyblue' : 'gray')};
  filter: ${(props: ImageProps) => (props.selected ? '' : 'grayscale(.7)')};
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: .25rem;
  }
  margin-bottom: .5rem;
`;

const GroupButton = styled.button`
  padding: 0;
  background-color: black;
  border: none;
  color: inherit;
  height: calc(1.2rem + 2px);
  width: calc(3rem + 2px);
  flex-shrink: 0;
  overflow: hidden;

  :hover {
    background-color: rgba(0,0,0,0);
    border: solid black 1px;
  }
`;

interface IconProps {
  name: string;
  src: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLImageElement>;
}
function Icon(props: IconProps) {
  const {
    name, src, selected, onClick,
  } = props;

  if(!src) {
    return null;
  }

  return (
    <IconContainer selected={selected} onClick={onClick} role="button">
      <Image alt={name} src={src} width="88" height="88" layout="intrinsic" />
    </IconContainer>
  );
}

function VtuberSelector() {
  const [filter, setFilter] = useRecoilState(livesFilter);
  const { liverImageMap } = useRecoilValue(liverImagesState);

  const { vtubers, allVtubers } = filter;
  const vSet = new Set(vtubers);

  const onAllVtubersChange = () => {
    setFilter(produce((draft: FilterState) => {
      draft.allVtubers = !draft.allVtubers;
    }));
  };

  const groupNodes = HOLO_GROUPS.map(({ name, members }) => {
    const icons = members.map((member) => {
      const handleClick = () => {
        setFilter(produce((draft: FilterState) => {
          const index = draft.vtubers.indexOf(member);
          if (index >= 0) {
            draft.vtubers = draft.vtubers.filter((x) => x !== member);
          } else {
            draft.vtubers.push(member);
          }

          draft.allVtubers = false;
        }));
      };

      return (
        <Icon
          key={member}
          name={member}
          selected={allVtubers || vSet.has(member)}
          src={liverImageMap[member]}
          onClick={handleClick}
        />
      );
    });

    const handleGroupClick = () => {
      setFilter(produce((draft: FilterState) => {
        const currentVtubers = new Set(draft.vtubers);
        if (members.every((m) => currentVtubers.has(m))) {
          draft.vtubers = draft.vtubers.filter((v) => !members.includes(v));
        } else {
          members
            .filter((m) => !currentVtubers.has(m))
            .forEach((m) => { draft.vtubers.push(m); });
        }

        draft.allVtubers = false;
      }));
    };

    return (
      <Row key={name}>
        <GroupButton type="button" onClick={handleGroupClick}>
          {name}
        </GroupButton>
        {icons}
      </Row>
    );
  });

  return (
    <div>
      <Row>
        全表示
        <Switch checked={allVtubers} onChange={onAllVtubersChange} />
      </Row>
      {groupNodes}
    </div>
  );
}

export default VtuberSelector;
