import React, { MouseEventHandler } from 'react';
import styles from './radioutton.module.scss';
import { IRadiobutton } from './Radiobutton.types';

export const Radiobutton = (props: IRadiobutton) => {
  const { group, value, handleClick, checked } = props;
  return (
    <div>
      <div className="radiobuttonContainer">
        <input
          type="radio"
          id="css"
          name={group}
          value={value}
          checked={checked}
          onClick={
            handleClick as unknown as MouseEventHandler<HTMLInputElement>
          }
        ></input>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default Radiobutton;
