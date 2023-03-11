import React, { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShelfItem from './ShelfItem';
import ColorMode from './ColorMode';

const Shelf = () => {
  const [collapsed, setCollapsed] = useState(false);

  const projects = [
    {
      title: 'All projects',
      count: 3,
    },
    {
      title: 'Design system',
      count: null,
    },
    {
      title: 'User flow',
      count: null,
    },
    {
      title: 'UX research',
      count: null,
    },
  ];

  const tasks = [
    {
      title: 'All tasks',
      count: 11,
    },
    {
      title: 'To do',
      count: 4,
    },
    {
      title: 'In progress',
      count: 4,
    },
    {
      title: 'Done',
      count: 3,
    },
  ];

  return (
    <div
      className={`shelfContainer ${collapsed && 'fadeOutShelf'} ${
        !collapsed && 'fadeInShelf'
      }`}
      onClick={() => {
        if (collapsed) {
          setCollapsed(false);
        }
      }}
    >
      <div
        className={`contentBox ${collapsed && 'fadeOutContent'} ${
          !collapsed && 'fadeInContent'
        }`}
      >
        <div className="container">
          <div className="topRow">
            <h1 className="shelfTitle">Projects</h1>
            <button
              className="closeShelfMenu"
              title="Close"
              onClick={() => {
                setCollapsed(true);
              }}
            >
              <FontAwesomeIcon icon={faXmark} color={'#fff'} />
            </button>
          </div>
          <ShelfItem heading="Projects" items={projects} />
          <ShelfItem heading="Tasks" items={tasks} />
        </div>
        <ColorMode />
      </div>
    </div>
  );
};

export default Shelf;
