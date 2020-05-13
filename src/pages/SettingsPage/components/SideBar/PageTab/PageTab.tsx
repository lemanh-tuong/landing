import { Button } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Loading from 'components/Loading/Loading';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { listPage, messageRequestListPage, statusRequestListPage } from 'pages/SettingsPage/selectors';
import thunkDeletePage from 'pages/SettingsPage/thunks/thunkPage/thunkDeletePage/thunkDeletePage';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import FormAddNewPage from '../../OtherForm/FormAddNewPage/FormAddNewPage';
import FormDuplicatePage from '../../OtherForm/FormDuplicateNewPage/FormDuplicateNewPage';
import styles from './PageTab.module.scss';

const PageTab = () => {
  const listPages = useSelector(listPage);
  const status = useSelector(statusRequestListPage);
  const messageErr = useSelector(messageRequestListPage);

  const deletePage = thunkDeletePage();

  const handleDeletePage = (indexDelete: number) => {
    return () => deletePage(indexDelete);
  };

  const _renderPage = ({ id, pageName, pathName }: PageGeneralData, index: number) => {
    return (
      <NavLink className={styles.btn} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} key={id}>
        <div className={styles.pageName}>
          {pageName}
        </div>
        <Button onClick={handleDeletePage(index)}>
          handleDeletePage
        </Button>
      </NavLink>
    );
  };

  const _renderPages = () => {
    return listPages.map((page, index) => _renderPage(page, index));
  };

  const _renderSuccess = () => {
    return <>
      {_renderPages()}
      <ButtonGroup>
        <Button size='large' shape='round' danger onClick={PopUp.show('add-page-form')}>
          Add New Page
        </Button>
        <Button size='large' shape='round' danger onClick={PopUp.show('duplicate-page-form')}>
          Duplicate Page
        </Button>
      </ButtonGroup>
      <FormAddNewPage />
      <FormDuplicatePage />
    </>;
  };

  const _renderSwitch = () => {
    switch (status) {
      case 'loading':
        return <Loading />;
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageErr }} />;
      case 'success':
        return <div className={'PageTab'}>{_renderSuccess()}</div>;
      default:
        return null;
    }
  };

  return _renderSwitch();
};

export default PageTab;
