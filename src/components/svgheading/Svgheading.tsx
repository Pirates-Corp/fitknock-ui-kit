import React from 'react';
import Icon from '../icon/Icon';
export const Svgheading = ({ iconName, value, iconColor, valueColor }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '15px',
        color: valueColor,
        gap: '2rem',
      }}
    >
      <Icon
        iconName={iconName}
        width="25px"
        height="25px"
        iconColor={iconColor}
        borderProperty="none"
      />
      {value}
    </div>
  );
};

export default Svgheading;
