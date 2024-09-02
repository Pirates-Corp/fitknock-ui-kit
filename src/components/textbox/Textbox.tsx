import React from 'react';
import styles from './textbox.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../theme-context/ThemeContext';
import { ITextBox } from './Textbox.types';

export const Textbox = (props: ITextBox) => {
  const { label, placeholder, type, containerClassName, required} = props;

  const { theme } = useContext(ThemeContext);

  const tempObj = { ...props };
  delete tempObj.label;
  delete tempObj.placeholder;
  delete tempObj.containerClassName;

  const htmlProps = {
    ...tempObj,
  };

  return (
    <div
      className={`${styles.textboxContainer} ${
        containerClassName ? containerClassName : ''
      }`}

    >
      {label && <label style={theme.textbox.label}>{label}</label>}
      <div>
        <input
          {...(htmlProps as React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >)}
          type={type || 'text'}
          style={{ ...theme.textbox.input }}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default Textbox;
