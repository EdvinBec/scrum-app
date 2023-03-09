import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShelfItem } from 'interfaces';
import React, { useState } from 'react';

type Props = {
  heading: string;
  items: Array<ShelfItem>;
};

const ShelfItem = ({ heading, items }: Props) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="projectsShelf">
      <div className="upperRow">
        <h4>{heading}</h4>
        <button
          className="openMenuListButton"
          onClick={() => {
            if (collapse === false) {
              setCollapse(true);
            } else {
              setCollapse(false);
            }
          }}
        >
          <FontAwesomeIcon icon={faCaretDown} className="fa-lg caret-icon" />
        </button>
      </div>
      <div
        className={`bottomShelfPart ${collapse && 'fadeOut'} ${
          !collapse && 'fadeIn'
        }`}
      >
        <div className="verticalLine"></div>
        <div>
          {items.map((item, itemIdx) => {
            return (
              <div className="shelfItem" key={itemIdx}>
                <div className="indicatorLine"></div>
                <button>
                  {item.title + ' '}
                  {item.count != null && `(${item.count})`}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShelfItem;
