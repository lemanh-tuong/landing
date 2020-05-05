import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavMobile.module.scss';

interface NavMobileProps {
  show: boolean;
}

const NavMobile: FC<NavMobileProps> = ({ show = false }) => {
  return (
    <div className={styles.navMobile} style={{ transform: `translateX(${show ? '0px' : '-100%'})` }}>
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <Link to='/' className={styles.navLink}>
            <i className="fas fa-caret-right"></i>
            About Application
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/about' className={styles.navLink}>
            <i className="fas fa-caret-right"></i>
            About Application
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/' className={styles.navLink}>
            <i className="fas fa-caret-right"></i>
            About Application
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/' className={styles.navLink}>
            <i className="fas fa-caret-right"></i>
            About Application
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
