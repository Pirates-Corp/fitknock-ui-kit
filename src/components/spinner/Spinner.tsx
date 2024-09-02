import React from 'react';
import './spinner.module.scss';
import styles from './spinner.module.scss';
interface ISpinner {
  Loadertype: string;
  isLoading: boolean;
}
export const Spinner = ({ Loadertype, isLoading }: ISpinner) => {
  if (isLoading === false) return <></>;
  if (Loadertype == 'child') return <div className="loading"></div>;
  return (
    <div
      style={{
        backgroundColor: 'hwb(210 68% 26% / 0.9)',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '9',
      }}
    >
      <div className={`${styles.loading}`}></div>
    </div>
  );
};
