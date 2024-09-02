import React from 'react';
import styles from './datebox.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../theme-context/ThemeContext';
import { IDate } from './Date.types';

export const DateBox = (props: IDate) => {
  const { label, containerClassName } = props;

  const { theme, isDark } = useContext(ThemeContext);

  const tempObj = { ...props };
  delete tempObj.label;
  delete tempObj.containerClassName;

  const htmlProps = {
    ...tempObj,
  };

  return (
    <div
      className={`${styles.textboxContainer}  ${
        isDark ? styles.dateBoxContainerDark : styles.dateBoxContainerLight
      } ${containerClassName ? containerClassName : ''}`}
    >
      {label && <label style={theme.textbox.label}>{label}</label>}
      <div>
        <input
          {...(htmlProps as React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >)}
          type={'date'}
          style={{ ...theme.textbox.input }}
        />
      </div>
    </div>
  );
};

export default DateBox;
