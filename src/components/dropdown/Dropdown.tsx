import React from 'react';
import Select from 'react-select';
import { useContext } from 'react';
import { ThemeContext } from '../theme-context/ThemeContext';
import styles from "../dropdown/Dropdown.module.scss"
import { IDropdown } from './Dropdown.types';

//TODO : TS interface
const Dropdown = (props: any) => {
  const { label, width, height, containerClassName } = props;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: '1.2px solid #959292',
      borderRadius: '0.6rem',
      fontSize: '1.2rem',
      color: theme.dropdown.color,
      backgroundColor: theme.dropdown.backgroundColor,
      width: width ?? '24.8rem',
      height: height ?? '20px',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: theme.dropdown.color,
      backgroundColor: theme.dropdown.backgroundColor,
    }),
    option: (styles: any, { isFocused, isSelected }: any) => ({
      fontSize: '1.2  rem',
      padding: isFocused ? '8px 16px' : '8px 16px',
      backgroundColor: isFocused
        ? theme.dropdown.isFocused
        : theme.dropdown.backgroundColor,
      color: theme.dropdown.color,
    }),
    menu: (styles: any) => ({
      ...styles,
      color: theme.dropdown.color,
      backgroundColor: theme.dropdown.backgroundColor,
    }),
  };

  const tempObj = { ...props };
  delete tempObj.label;
  delete tempObj.containerClassName;
  delete tempObj.width;
  delete tempObj.height;

  const reactSelectProps = {
    ...tempObj,
  };

  return (
    <div
      className={`${styles.dropDowncontainerClass} ${
        containerClassName ? containerClassName : ''
      }`}
    >
      {label && <label style={theme.textbox.label}>{label}</label>}
      <Select {...reactSelectProps} styles={customStyles} />
    </div>
  );
};

export default Dropdown;
