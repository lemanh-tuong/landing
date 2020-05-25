import Loading from 'components/Loading/Loading';
import Nav, { ButtonNav, NavItemType } from 'components/Nav/Nav';
import PopUp from 'components/PopUp/PopUp';
import { useMount } from 'hooks/useMount';
import { buttons, logoImg, navItems, statusRequestNav } from 'pages/SettingsPage/selectors';
import thunkAddNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkAddNavItem/thunkAddNavItem';
import thunkGetDataNav from 'pages/SettingsPage/thunks/thunksNav/thunkGetDataNav/thunkGetDataNav';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormNav from '../OtherForm/FormNav/FormNav';

const NavEditable: FC = () => {
  //Dispatch
  const getData = thunkGetDataNav();
  const addItem = thunkAddNavItem();
  // Selector
  const navList = useSelector(navItems);
  const buttonGroup = useSelector(buttons);
  const logo = useSelector(logoImg);
  const statusRequest = useSelector(statusRequestNav);
  const messageRequest = useSelector(statusRequestNav);

  const handleShowPopupEditNav = () => {
    PopUp.show(`form-nav`)();
  };

  const handleAddItem = (item: NavItemType | ButtonNav, type: 'navItems' | 'buttons') => {
    if (type === 'navItems') addItem({ newItem: item, indexInsert: navList.length, type: type });
    else addItem({ newItem: item, indexInsert: buttonGroup.length, type: type });
  };

  const _renderSuccess = () => {
    return (
      <div className="NavEditable">
        <Nav
          style={{ zIndex: 99 }}
          logo={logo}
          navItems={navList}
          buttons={buttonGroup}
          isBuilder={true}
          onShowpopupEditNav={handleShowPopupEditNav}
          onAddItem={handleAddItem}
        />
        <PopUp id="form-nav">
          <FormNav />
        </PopUp>
      </div>
    );
  };

  useMount(() => {
    getData();
  });

  const _renderSwitch = () => {
    switch (statusRequest) {
      case 'loading':
        return <Loading />;
      case 'success':
        return _renderSuccess();
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageRequest }} />;
      default:
        return null;
    }
  };
  return _renderSwitch();
};

export default NavEditable;
