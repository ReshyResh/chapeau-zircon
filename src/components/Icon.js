import React from 'react';
import { PropTypes } from 'prop-types';

const Icon = (props) => {
  const {
    rotated, color, w, h,
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={rotated === 'true' ? { transform: 'rotate(180deg)' } : null}
      fill={color || 'black'}
      width={w || '90'}
      height={h || '90'}
      viewBox="0 -64 640 640"
    >
      <path d="M490 296.9C480.51 239.51 450.51 64 392.3 64c-14 0-26.49 5.93-37 14a58.21 58.21 0 0 1-70.58 0c-10.51-8-23-14-37-14-58.2 0-88.2 175.47-97.71 232.88C188.81 309.47 243.73 320 320 320s131.23-10.51 170-23.1zm142.9-37.18a16 16 0 0 0-19.75 1.5c-1 .9-101.27 90.78-293.16 90.78-190.82 0-292.22-89.94-293.24-90.84A16 16 0 0 0 1 278.53C1.73 280.55 78.32 480 320 480s318.27-199.45 319-201.47a16 16 0 0 0-6.09-18.81z" />
    </svg>
  );
};

Icon.propTypes = {
  rotated: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
};

export default Icon;
