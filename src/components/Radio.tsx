import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  cursor: pointer;
`;

interface Props {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Settings(props: Props) {
  const { label, checked, onChange } = props;

  return (
    <Label>
      <input
        type="radio"
        value={label}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </Label>
  );
}

export default Settings;
