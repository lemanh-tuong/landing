import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Button, { ButtonProps } from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Image from 'components/Image/Image';
import { buttonDefault } from 'pages/SettingsPage/components/OtherForm/FormNav/FormEditButtonNav/FormEditButtonNav';
import { navItemDefault } from 'pages/SettingsPage/components/OtherForm/FormNav/FormEditNavLink/FormEditNavLink';
import React, { CSSProperties, FC, memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Nav.module.scss';

export interface NavItemType {
  id: string | number;
  href: string;
  text: string;
  target?: 'blank' | 'self';
  // type: 'default' | 'primary' | '';
}

export type ButtonNav = ButtonProps & { iconClass?: string };

export interface NavProps {
  logo: {
    imgSrc: string;
  };
  navItems: NavItemType[];
  buttons: ButtonNav[];
  style?: CSSProperties;
}

export interface NavPropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditLogo?: () => void;
  onShowpopupEditNav?: () => void;
  onAddItem?: (item: NavItemType | ButtonNav, type: 'buttons' | 'navItems') => void;
}

const Nav: FC<NavProps & NavPropsBuilder> = ({ logo, navItems, buttons, style, isBuilder, onShowPopupEditLogo, onShowpopupEditNav, onAddItem }) => {
  const [active, setActive] = useState(true);

  const handleAddItem = (type: 'buttons' | 'navItems') => {
    return () => {
      if (type === 'buttons') onAddItem?.(buttonDefault, type);
      else onAddItem?.(navItemDefault, type);
    };
  };

  // NAV ITEM
  const _renderLink = ({ href, text, target }: NavItemType) => {
    if (isBuilder) {
      return (
        <a href="###" onClick={e => e.preventDefault()} className={`${styles.navLink} ${!!text ? null : styles.isBuilderEmpty}`}>
          {text}
        </a>
      );
    }
    if (!!text && href.startsWith('/')) {
      return (
        <Link to={href} target={target} className={`${styles.navLink}`}>
          {text}
        </Link>
      );
    }
    if (!!text) {
      return (
        <a href={href} target={target} className={styles.navLink}>
          {text}
        </a>
      );
    }
    return null;
  };

  const _renderNavItem = ({ text, href, id, target }: NavItemType) => {
    return (
      <li className={styles.navItem} key={uuidv4()}>
        {_renderLink({ text: text, id: id, target: target, href: href })}
      </li>
    );
  };

  const _renderAddItem = () => {
    return (
      <li className={styles.navItem} key={uuidv4()}>
        <div className={styles.addNavItem} onClick={handleAddItem('navItems')}>
          Add Item
        </div>
      </li>
    );
  };

  // Logo
  const _renderLogo = () => {
    return (
      <div className={styles.logo}>
        <Link to="/">
          <Image imgSrc={logo.imgSrc} type='tagImg' isBuilder={isBuilder} onEditable={onShowPopupEditLogo} />
        </Link>
      </div>
    );
  };

  // ButtonGroup
  const _renderButton = ({ type, backgroundColor, text, iconClass }: typeof buttons[0]) => {
    return (
      <Button type={type} backgroundColor={backgroundColor} key={uuidv4()}>
        {iconClass && <i className={iconClass} style={{ marginRight: '7px' }}></i>}
        {text}
      </Button>
    );
  };

  const _renderAddButton = () => {
    return (
      <Button type={'border'} className={styles.addNavButton} >
        <div onClick={handleAddItem('buttons')}>Add Button</div>
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
      <PopOverText onEdit={onShowpopupEditNav}
        component={
          <div style={style} className={`${styles.isBuilder} ${styles.navHeader} ${active ? styles.active : ''}`}>
            {_renderLogo()}
            <div className={styles.navigation}>
              <nav className={styles.nav}>
                <ul className={styles.menu}>
                  {navItems.map(item => _renderNavItem(item))}
                  {navItems.length < 5 && _renderAddItem()}
                </ul>
                <ButtonGroup className={styles.navButtonGroup}>
                  {buttons.map(item => _renderButton(item))}
                  {buttons.length < 2 && _renderAddButton()}
                </ButtonGroup>
                <button className={`${styles.collapseBtn}`}>
                  <i className={`fas fa-bars `}></i>
                </button>
              </nav>
            </div>
          </div>
        }
      />
    );
  }

  return (
    <div style={style} className={`${styles.navHeader} ${active ? styles.active : ''}`}>
      {_renderLogo()}
      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {navItems.map(item => _renderNavItem(item))}
          </ul>
          <ButtonGroup className={styles.navButtonGroup}>
            {buttons.map(item => _renderButton(item))}
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
