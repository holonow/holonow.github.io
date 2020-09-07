import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin: 0 .5rem;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(13px);
  }
`;

const Sidebar = styled.span`
 position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 17px;
  transition: .4s;

  :before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

interface Props {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
function Switch(props: Props) {
  const { checked, onChange } = props;
  return (
    <Label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <Sidebar className="slider" />
    </Label>
  );
}

export default Switch;
