import React, { useContext } from 'react';
import { ICheckBox } from './Checkbox.types';
import styles from './checkbox.module.scss';
import { ThemeContext } from '../theme-context/ThemeContext';

export const Checkbox = (props: ICheckBox) => {
  const { label, containerClassName, style, checked, id = '' } = props;
  const { theme } = useContext(ThemeContext);

  const tempObj = { ...props };
  delete tempObj.containerClassName;

  const htmlProps = {
    ...tempObj,
  };

  return (
    <label
      // htmlFor={id}
      className={`${styles.container} ${
        containerClassName ? containerClassName : ''
      }`}
      style={{ color: theme.checkBox.color, ...style }}
    >
      {label}
      <input id={id} type="checkbox" {...htmlProps} checked={checked} />
      <span className={`${styles.checkmark}`}></span>
    </label>
  );
};

export default Checkbox;
