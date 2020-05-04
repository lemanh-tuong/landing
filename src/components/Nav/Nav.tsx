import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import React, { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

type NavItemType = {
  type?: string;
  href: string;
  text: string;
}

export interface NavProps {
  logo: {
    imgSrc: string;
  };
  navItems: NavItemType[]
}

const Nav: FC<NavProps> = ({ logo, navItems }) => {
  const [active, setActive] = useState(false);

  const _renderNavItems = () => {
    <li className={styles.navItems}>
      <Link to="/about" className={styles.navLink}>
        About Application
      </Link>
    </li>
  }

  return (
    <div className={`${styles.navHeader} ${active ? styles.active : ''}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo.imgSrc} alt="##" />
        </Link>
      </div>
      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                Support Forum
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                Online Docs
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                Join Community
              </Link>
            </li>
          </ul>
          <ButtonGroup className={styles.navButtonGroup}>
            <Button color='primary'>
              <i className="fas fa-shopping-cart" style={{ marginRight: '7px' }}></i>
              Purchase Now
            </Button>
            <Button>
              Try Demo
            </Button>
          </ButtonGroup>
          <button className={`${styles.collapseBtn}`}>
            <i className={`fas fa-bars `}></i>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default memo(Nav);
