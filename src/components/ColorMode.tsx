import React, { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

const ColorMode = (props: Props) => {
  const [isActiveFirst, setIsActiveFirst] = useState(false);
  return (
    <div className="colorModeButtonConatiner">
      <button
        className={`${isActiveFirst && 'active'}`}
        onClick={() => {
          setIsActiveFirst(true);
        }}
      >
        <FontAwesomeIcon className="fa-lg colorModeIcon" icon={faSun} />
        Light
      </button>
      <button
        className={`${!isActiveFirst && 'active'}`}
        onClick={() => {
          setIsActiveFirst(false);
        }}
      >
        <FontAwesomeIcon className="fa-lg colorModeIcon" icon={faMoon} />
        Dark
      </button>
    </div>
  );
};

export default ColorMode;
