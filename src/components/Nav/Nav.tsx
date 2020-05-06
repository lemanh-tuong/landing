import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Image from 'components/Image/Image';
import React, { CSSProperties, FC, memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Nav.module.scss';

interface NavItemType {
  id: string | number;
  href: string;
  text: string;
}

export interface NavProps {
  logo: {
    imgSrc: string;
  };
  navItems: NavItemType[];
  style?: CSSProperties;
  isBuilder?: boolean;
  onShowPopupEditButton?: (indexButton: number) => void;
  onShowPopupEditLogo?: () => void;
}

const Nav: FC<NavProps> = ({ logo, navItems, style, isBuilder, onShowPopupEditButton, onShowPopupEditLogo }) => {
  const [active, setActive] = useState(true);

  const handleShowPopupEditButton = (indexButton: number) => {
    return () => onShowPopupEditButton?.(indexButton);
  };

  const _renderLink = (text: string, href: string, indexButton: number) => {
    if (isBuilder) {
      return <PopOverText onEdit={handleShowPopupEditButton(indexButton)} component={
        <a href="###" onClick={e => {
          e.preventDefault(); handleShowPopupEditButton(indexButton)();
        }} className={`${styles.navLink} ${!!text ? null : styles.isBuilderEmpty}`}>
          {text}
        </a>
      } />;
    }
    if (!!text && href.startsWith('/')) {
      return (
        <Link to={href} className={`${styles.navLink}`}>
          {text}
        </Link>
      );
    }
    if (!!text) {
      return (
        <a href={href} className={styles.navLink}>
          {text}
        </a>
      );
    }
    return null;
  };

  const _renderNavItem = ({ text, href }: NavItemType, indexButton: number) => {
    return (
      <li className={styles.navItem} key={uuidv4()}>
        {_renderLink(text, href, indexButton)}
      </li>
    );
  };

  const _renderLogo = () => {
    if (isBuilder) {
      return <PopOverText onEdit={onShowPopupEditLogo} component={
        <div className={styles.logo} onClick={onShowPopupEditLogo} style={{ cursor: 'pointer' }}>
          <img src={logo.imgSrc} alt="##" />
        </div>
      } />;
    }
    return (
      <div className={styles.logo}>
        <Link to="/">
          <Image imgSrc={logo.imgSrc} type='tagImg' isBuilder={isBuilder} onEditable={onShowPopupEditLogo} />
        </Link>
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    if (!isBuilder) {
      window.addEventListener('scroll', handleScroll);
    }
  });

  return (
    <div style={style} className={`${styles.navHeader} ${active ? styles.active : ''}`}>
      {_renderLogo()}
      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {navItems.map((item, index) => _renderNavItem(item, index))}
          </ul>
          <ButtonGroup className={styles.navButtonGroup}>
            <Button type='primary'>
              <i className="fas fa-shopping-cart" style={{ marginRight: '7px' }}></i>
              Purchase Now
            </Button>
            <Button type='white'>
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
