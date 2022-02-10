import React from 'react';

const Icon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" 
          style={props.rotated === 'true' ? {transform: 'rotate(180deg)'} : null } 
          fill={props.color || 'black' } 
          width={props.w || '40' } 
          height={props.h || '40' } 
          viewBox="0 0 24 24">
          <path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/></svg>;
};

export default Icon;
