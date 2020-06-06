import Loading from 'components/Loading/Loading';
import Nav from 'components/Nav/Nav';
import PopUp from 'components/PopUp/PopUp';
import { useMount } from 'hooks/useMount';
import { logoImg, navItems, statusRequestNav } from 'pages/SettingsPage/selectors';
import thunkGetDataNav from 'pages/SettingsPage/thunks/thunksNav/thunkGetDataNav/thunkGetDataNav';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormNav from '../OtherForm/FormNav/FormNav';

const NavEditable: FC = () => {
  //Dispatch
  const getData = thunkGetDataNav();

  // Selector
  const navList = useSelector(navItems);
  const logo = useSelector(logoImg);
  const statusRequest = useSelector(statusRequestNav);
  const messageRequest = useSelector(statusRequestNav);

  const handleShowPopupEditNav = () => {
    PopUp.show(`form-nav`)();
  };

  const _renderSuccess = () => {
    return (
      <div className="NavEditable">
        <Nav
          style={{ zIndex: 99 }}
          logo={logo}
          navItems={navList}
          isBuilder={true}
          onShowpopupEditNav={handleShowPopupEditNav}
        />
        <FormNav />
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
