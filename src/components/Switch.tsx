import React from 'react';
import styles from './Switch.module.scss';

interface Props {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
function Switch(props: Props) {
  const { checked, onChange } = props;
  return (
    <label className={styles.label}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.sidebar} />
    </label>
  );
}

export default Switch;
