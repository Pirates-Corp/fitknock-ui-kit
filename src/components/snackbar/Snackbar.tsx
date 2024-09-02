import React from 'react';
import { ReactElement, useContext, useEffect } from 'react';
import Icon from '../icon/Icon';
import styles from './Snackbar.module.scss';
import { ThemeContext } from '../theme-context/ThemeContext';


export type ISnackBarOptions = {
  message: string;
  isShow: boolean;
  variant: 'error' | 'success' | 'info';
  timmer?: number;
  iconName?: string;
  iconColor?: string;
  renderComponent?: ReactElement;
};
export type ISnackBar = {
  snackBarOptions: ISnackBarOptions;
  setSnackBarOptions: React.Dispatch<React.SetStateAction<ISnackBarOptions>>;
};
const Snackbar = (props: ISnackBar) => {
  const { theme } = useContext(ThemeContext);

  const {
    iconName,
    message,
    isShow,
    variant,
    timmer,
    iconColor,
    renderComponent,
  } = props.snackBarOptions;
  let timeOutId: number | NodeJS.Timeout;

  useEffect(() => {
    timeOutId = setTimeout(
      () => {
        props.setSnackBarOptions({
          ...props.snackBarOptions,
          isShow: false,
        });
      },
      timmer ? timmer : 5000
    );
    return () => {
      clearTimeout(timeOutId as NodeJS.Timeout);
    };
  }, [isShow]);

  return (
    <>
      {isShow && (
        <div
          className={`${styles.sanckBarContainer} ${styles.fadeInUp}  `}
          style={
            theme.snackBar[variant]
              ? { ...theme.snackBar[variant] }
              : { ...theme.snackBar.info }
          }
        >
          <Icon
            iconName={`${
              iconName
                ? iconName
                : variant === 'info'
                ? 'warning'
                : variant === 'error'
                ? 'xcircle'
                : variant === 'success'
                ? 'checkCircle'
                : 'info'
            }`}
            iconColor={iconColor ? iconColor : theme.snackBar.icon.color}
            width="50px"
            height="50px"
            borderProperty="none"
          />
          <p> {message}</p>

          <div>{renderComponent && renderComponent}</div>
        </div>
      )}
    </>
  );
};

export default Snackbar;
