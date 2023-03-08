import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../assets/img/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBorderAll,
  faCloudArrowUp,
  faSliders,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faCalendar,
  faChartBar,
  faMap,
} from '@fortawesome/free-regular-svg-icons';

type Props = {
  expanded: boolean;
};

const Sidebar = ({ expanded }: Props) => {
  let stateOfSidebar;

  const [selectedButtonNumber, setSelectedButtonNumber] = useState(0);

  if (!expanded) {
    stateOfSidebar = 'collapsed';
  } else {
    stateOfSidebar = 'expanded';
  }

  return (
    <div className={stateOfSidebar}>
      <div className="sidebarContainer">
        <div className="sidebarUpperItemContainer">
          <Image src={logo} alt="Scrum Logo" className="logo" />
          <button
            title="menu"
            className={`sidebarButton ${
              selectedButtonNumber === 0 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(0);
            }}
          >
            <FontAwesomeIcon icon={faBorderAll} className="fa-xl sidebarIcon" />
          </button>
          <button
            title="account"
            className={`sidebarButton ${
              selectedButtonNumber === 1 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(1);
            }}
          >
            <FontAwesomeIcon icon={faUser} className="fa-xl sidebarIcon" />
          </button>
          <button
            title="calendar"
            className={`sidebarButton ${
              selectedButtonNumber === 2 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(2);
            }}
          >
            <FontAwesomeIcon icon={faCalendar} className="fa-xl sidebarIcon" />
          </button>
          <button
            title="statistics"
            className={`sidebarButton ${
              selectedButtonNumber === 3 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(3);
            }}
          >
            <FontAwesomeIcon icon={faChartBar} className="fa-xl sidebarIcon" />
          </button>
          <button
            title="upload"
            className={`sidebarButton ${
              selectedButtonNumber === 4 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(4);
            }}
          >
            <FontAwesomeIcon
              icon={faCloudArrowUp}
              className="fa-xl sidebarIcon"
            />
          </button>
          <button
            title="view"
            className={`sidebarButton ${
              selectedButtonNumber === 5 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(5);
            }}
          >
            <FontAwesomeIcon icon={faMap} className="fa-xl sidebarIcon" />
          </button>
          <button
            title="settings"
            className={`sidebarButton ${
              selectedButtonNumber === 6 && 'selected'
            }`}
            onClick={() => {
              setSelectedButtonNumber(6);
            }}
          >
            <FontAwesomeIcon icon={faSliders} className="fa-xl sidebarIcon" />
          </button>
        </div>
        <button
          title="logout"
          className={`logoutButton ${selectedButtonNumber === 7 && 'selected'}`}
          onClick={() => {
            setSelectedButtonNumber(7);
          }}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="fa-xl sidebarIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
