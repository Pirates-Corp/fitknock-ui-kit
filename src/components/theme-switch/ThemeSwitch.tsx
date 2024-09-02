import { useContext } from 'react';
import { ThemeContext } from '../theme-context/ThemeContext';
import Icon from '../icon/Icon';
import styles from './themeswitch.module.scss';
import React from 'react';

export const Switch = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return (
    <div>
      <button className={styles.modeSwitch} onClick={toggleTheme}>
        <Icon
          iconName={isDark ? 'sun' : 'moon'}
          iconColor={isDark ? 'white' : 'black'}
          width="25px"
          height="25px"
          borderProperty="none"
        />
      </button>
      <span></span>
    </div>
  );
};
export default Switch;
