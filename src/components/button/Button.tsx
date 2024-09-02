import React, { useContext } from 'react';
import styles from './Button.module.scss';
import Icon from '../icon/Icon';
import { IButton } from './Button.types';
import { ThemeContext } from '../theme-context/ThemeContext';

const Button = (props: IButton) => {
  const { children, iconLeftName, iconRightName, className, variant, style } =
    props;
  const { theme } = useContext(ThemeContext);

  const tempObj = { ...props };
  delete tempObj.value;
  delete tempObj.className;
  delete tempObj.variant;
  delete tempObj.iconLeftName;
  delete tempObj.iconRightName;

  const htmlProps = {
    ...tempObj,
  };

  return (
    <>
      <button
        {...(htmlProps as React.DetailedHTMLProps<
          React.ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
        >)}
        className={`${styles.baseButton} ${className ? className : ''}`}
        style={
          variant
            ? { ...{ ...theme.button[variant] }, ...style }
            : { ...{ ...theme.button.default }, ...style }
        }
      >
        {iconRightName && (
          <Icon
            iconName={iconRightName}
            iconColor={variant ? theme.colors.white : theme.icon.color}
            width="20px"
            height="20px"
            borderProperty="none"
          />
        )}
        {children}
        {iconLeftName && (
          <Icon
            iconName={iconLeftName}
            iconColor={variant ? theme.colors.white : theme.icon.color}
            width="20px"
            height="20px"
            borderProperty="none"
          />
        )}
      </button>
    </>
  );
};

export default Button;
