import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import livesAtom from '../store/lives';
import { getLives } from '../apis';

interface ButtonProps {
  loading: boolean;
}

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 1rem;

  ${(props: ButtonProps) => (props.loading ? 'animation: spin 2s linear infinite;' : '')}
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

function PageReloadButton() {
  const [loading, setLoading] = useState(false);
  const setLivesState = useSetRecoilState(livesAtom);

  const onButtonClick = async () => {
    if (loading) { return; }

    setLoading(true);

    const lives = await getLives();
    setLivesState({
      lives,
      updatedAt: new Date(),
    });

    // Make animation longer
    setTimeout(() => { setLoading(false); }, 1000);
  };

  return (
    <Button onClick={onButtonClick} loading={loading}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </Button>
  );
}

export default PageReloadButton;
