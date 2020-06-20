import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Button, { ButtonProps } from 'components/Button/Button';
import Image from 'components/Image/Image';
import React, { CSSProperties, FC, memo, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Nav.module.scss';

export type ButtonNav = ButtonProps & { iconClass?: string };

export interface NavItemType extends ButtonNav {
  id: string | number;
  href: string;
  text: string;
  target?: 'blank' | 'self';
  variance?: 'nav' | 'button';
}

export interface NavProps {
  logo: {
    imgSrc: string;
  };
  navItems: NavItemType[];
  style?: CSSProperties;
}

export interface NavPropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditLogo?: () => void;
  onShowpopupEditNav?: () => void;
}

const Nav: FC<NavProps & NavPropsBuilder> = ({ logo, navItems, style, isBuilder, onShowPopupEditLogo, onShowpopupEditNav }) => {
  const [active, setActive] = useState(true);
  const [show, setShow] = useState(false);

  const handleShow = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShow(!show);
  };

  // NAV ITEM
  const _renderLink = ({ href, text, target, variance = 'nav', type = 'primary', size, iconClass }: NavItemType, isMobile?: boolean) => {
    if (variance === 'button') {
      return _renderButton({ text, target, href, type, size, iconClass });
    }
    if (isBuilder && variance === 'nav') {
      return (
        <a href="###" onClick={e => e.preventDefault()} className={`${styles.navLink} ${!!text ? null : styles.isBuilderEmpty}`}>
          {isMobile ? <i className="fas fa-caret-right"></i> : null}
          {text}
        </a>
      );
    }
    if (!!text && href.startsWith('/')) {
      return (
        <NavLink to={{ pathname: href, state: href }} className={`${styles.navLink}`}>
          {isMobile ? <i className="fas fa-caret-right"></i> : null}
          {text}
        </NavLink>
      );
    }
    if (!!text) {
      return (
        <a href={href} target={target} className={styles.navLink}>
          {isMobile ? <i className="fas fa-caret-right"></i> : null}
          {text}
        </a>
      );
    }
    return null;
  };

  const _renderNavItem = ({ text, href, id, target, type, size, variance, iconClass }: NavItemType, isMobile?: boolean) => {
    return (
      <li className={styles.navItem} key={uuidv4()}>
        {_renderLink({ text, id, target, href, type, size, variance, iconClass }, isMobile)}
      </li>
    );
  };

  // Logo
  const _renderLogo = () => {
    return (
      <div className={styles.logo}>
        <Link to="/">
          <Image imgSrc={logo.imgSrc} type="tagImg" isBuilder={isBuilder} onEditable={onShowPopupEditLogo} />
        </Link>
      </div>
    );
  };

  // ButtonGroup
  const _renderButton = ({ type, href, target, size, backgroundColor, text, iconClass }: ButtonNav) => {
    return (
      <Button href={href} size={size} type={type} target={target} backgroundColor={backgroundColor} key={uuidv4()}>
        {iconClass && <i className={iconClass} style={{ marginRight: '7px' }}></i>}
        {text}
      </Button>
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

  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onShowpopupEditNav}
        component={
          <div style={style} className={`${styles.isBuilder} ${styles.navHeader} ${active ? styles.active : ''}`}>
            {_renderLogo()}
            <div className={styles.navigation}>
              <nav className={styles.nav}>
                <ul className={styles.menu}>{navItems.map(item => _renderNavItem(item))}</ul>
                <button className={`${styles.collapseBtn}`} onClick={handleShow}>
                  <i className={`fas fa-bars `}></i>
                </button>
              </nav>
            </div>
          </div>
        }
      />
    );
  }

  const _renderOverlay = () => {
    return <div className={styles.overlay} onClick={handleShow} />;
  };

  return (
    <>
      <div style={style} className={`${styles.navHeader} ${active ? styles.active : ''}`}>
        {_renderLogo()}
        <div className={styles.navigation}>
          <nav className={styles.nav}>
            <ul className={styles.menu}>{navItems.map(item => _renderNavItem(item))}</ul>
            <button className={`${styles.collapseBtn}`} onClick={handleShow}>
              <i className={`fas fa-bars `}></i>
            </button>
          </nav>
        </div>
      </div>
      <div className={styles.navMobile} style={{ transform: `translateX(${show ? '0px' : '-100%'})` }}>
        <ul className={styles.navMenu}>{navItems.map(item => _renderNavItem(item, true))}</ul>
      </div>
      {show ? _renderOverlay() : null}
    </>
  );
};

export default memo(Nav);
