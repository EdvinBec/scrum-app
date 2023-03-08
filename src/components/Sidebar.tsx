import Image from 'next/image';
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
import { useRouter } from 'next/router';

type Props = {
  expanded: boolean;
};

const Sidebar = ({ expanded }: Props) => {
  const router = useRouter();

  const sidebarItems = [
    {
      title: 'Main Menu',
      icon: faBorderAll,
      href: '/',
    },
    {
      title: 'Projects',
      icon: faMap,
      href: '/projects',
    },
    {
      title: 'Account',
      icon: faUser,
      href: '/account',
    },
    {
      title: 'Calendar',
      icon: faCalendar,
      href: '/calendar',
    },
    {
      title: 'Statistics',
      icon: faChartBar,
      href: '/statistics',
    },
    {
      title: 'Cloud',
      icon: faCloudArrowUp,
      href: '/cloud',
    },
    {
      title: 'Settings',
      icon: faSliders,
      href: '/settings',
    },
  ];

  let stateOfSidebar;

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
          {sidebarItems.map((item, itemIdx) => {
            return (
              <button
                key={itemIdx}
                title={item.title}
                className={`sidebarButton ${
                  router.asPath === item.href && 'selected'
                }`}
                onClick={() => {
                  router.push(item.href);
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="fa-xl sidebarIcon"
                />
              </button>
            );
          })}
        </div>
        <button title="Logout" className={`logoutButton`}>
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
