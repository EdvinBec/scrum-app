import React from 'react';
import { faBell, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

type Props = {
  name: string;
};

const PageHeader = ({ name }: Props) => {
  return (
    <div className="pageHeaderContainer">
      <div className="pageHeaderContent">
        <h1 className="greeting">Welcome back, {name}</h1>
        <div className="profileButtons">
          <button>
            <FontAwesomeIcon icon={faSearch} className="pageHeaderIcon fa-lg" />
          </button>
          <button>
            <FontAwesomeIcon icon={faBell} className="pageHeaderIcon fa-lg" />
          </button>
          <div className="pageHeaderDate">
            <button>
              <FontAwesomeIcon
                icon={faCalendar}
                className="pageHeaderIcon fa-lg"
              />
            </button>
            <p className="date">
              <Moment format="DD. MM. YYYY" />
            </p>
          </div>
          <button className="profilePicture"></button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
