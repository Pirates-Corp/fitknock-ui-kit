import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../theme-context/ThemeContext';

const Typography = (props: any) => {
  const { theme } = useContext(ThemeContext);

  const { children, variant, style } = props;

  const tempObj = { ...props };
  delete tempObj.variant;
  delete tempObj.style;

  const htmlProps = {
    ...tempObj,
  };

  //TODO
  //1, apply styles by class
  //2, apply size according with UI kit

  return (
    <>
      {variant === 'h1' ? (
        <h1 {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </h1>
      ) : variant === 'h2' ? (
        <h2 {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </h2>
      ) : variant === 'h3' ? (
        <h3 {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </h3>
      ) : variant === 'h4' ? (
        <h4 {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </h4>
      ) : variant === 'h5' ? (
        <h5 {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </h5>
      ) : variant === 'h6' ? (
        <h6 {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </h6>
      ) : variant === 'p' ? (
        <p {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </p>
      ) : (
        <p {...htmlProps} style={{ ...{ ...theme.font }, ...style }}>
          {children}
        </p>
      )}
    </>
  );
};

export default Typography;
