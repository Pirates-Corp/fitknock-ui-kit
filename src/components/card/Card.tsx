import React, { useContext } from 'react';
import styles from './Card.module.scss';
import { ThemeContext } from '../theme-context/ThemeContext';

const Card = (props: any) => {
  const { children, className, style, layout } = props;
  const { theme } = useContext(ThemeContext);

  const tempObj = { ...props };
  delete tempObj.className;
  delete tempObj.children;
  delete tempObj.style;
  delete tempObj.layout;

  const htmlProps = {
    ...tempObj,
  };

  return (
    <div
      className={`${!layout ? styles.card : ''} ${className ? className : ''}`}
      style={
        layout
          ? { backgroundColor: theme.layoutCard.backgroundColor, ...style }
          : { backgroundColor: theme.card.backgroundColor, ...style }
      }
      {...htmlProps}
    >
      {children}
    </div>
  );
};

export default Card;
