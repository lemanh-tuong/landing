import imgLogo from 'assets/img/logo.png';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import React, { FC, memo, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

interface NavProps {
  onClick: () => void;
  active: boolean;
}

const Nav: FC<NavProps> = ({ onClick, active }) => {
  return (
    <div className={`${styles.navHeader} ${active ? styles.active : ''}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={imgLogo} alt="##" />
        </Link>
      </div>
      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>
                About Application
              </Link>
            </li>
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
            <i className={`fas fa-bars `} onClick={onClick}></i>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default memo(Nav);
