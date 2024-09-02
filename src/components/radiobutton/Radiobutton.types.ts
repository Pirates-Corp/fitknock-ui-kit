import { MouseEventHandler } from 'react';

export type IRadiobutton = {
  group: any;
  value: any;
  handleClick: MouseEventHandler<HTMLInputElement>;
  checked: any;
};
