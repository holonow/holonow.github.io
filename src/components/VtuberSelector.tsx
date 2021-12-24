import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import produce from 'immer';
import Image from 'next/image';

import { HOLO_GROUPS } from '../util/memberList';
import { livesFilter, FilterState } from '../store/lives';
import liverImagesState from '../store/liverImages';
import Switch from './Switch';
import { cx } from '../util/cx';

const rowClass = 'flex items-center gap-1 mb-2';

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
    <div
      onClick={onClick} role="button"
      className={cx(
        'w-10 h-10 border-2 border-solid overflow-hidden rounded-full',
        selected ? "border-sky-400" : "border-zinc-500",
        !selected && 'grayscale-[0.7]'
      )}
    >
      <Image alt={name} src={src} width="88" height="88" layout="intrinsic" />
    </div>
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
      <div className={rowClass} key={name}>
        <button
          type="button"
          onClick={handleGroupClick}
          className={cx(
            'p-px bg-black border-none text-inherit leading-tight',
            'shrink-0 overflow-hidden',
            'border-black border',
            'hover:bg-transparent hover:border-solid hover:p-0'
          )}
        >
          {name}
        </button>
        {icons}
      </div>
    );
  });

  return (
    <div>
      <div className={rowClass}>
        全表示
        <Switch checked={allVtubers} onChange={onAllVtubersChange} />
      </div>
      {groupNodes}
    </div>
  );
}

export default VtuberSelector;
