import { Button, Popover } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Loading from 'components/Loading/Loading';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopOver from 'components/PopOver/PopOver';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { listPage, messageRequestListPage, statusDeletePage, statusRequestListPage } from 'pages/SettingsPage/selectors';
import thunkDeletePage from 'pages/SettingsPage/thunks/thunkPage/thunkDeletePage/thunkDeletePage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import getQuery from 'utils/functions/getQuery';
import FormAddNewPage from '../../OtherForm/FormAddNewPage/FormAddNewPage';
import FormChangeGeneralDataPage from '../../OtherForm/FormChangeGeneralDataPage/FormChangeGeneralDataPage';
import FormDuplicatePage from '../../OtherForm/FormDuplicatePage/FormDuplicatePage';
import styles from './PageTab.module.scss';

const PageTab = () => {
  const history = useHistory();
  const nowPage = getQuery(history.location.search, ['pathName']);

  const listPages = useSelector(listPage);
  const statusRequest = useSelector(statusRequestListPage);
  const statusDelete = useSelector(statusDeletePage);
  const messageErr = useSelector(messageRequestListPage);

  const deletePage = thunkDeletePage();

  const handleDeletePage = (indexDelete: number) => {
    return () => {
      deletePage(indexDelete);
      const interval = setInterval(() => {
        if (statusDelete === 'deleted') {
          history.push('/admin/list');
          clearInterval(interval);
        }
      }, 1000);
    };
  };

  const _renderAlertConfirm = (pageName: string, indexDelete: number) => {
    return <PopUp id={`alert-confirm-${pageName}`} style={{ height: 400 }} type='antd' onOk={handleDeletePage(indexDelete)}>
      <p style={{ textAlign: 'center' }}>Delete
        <span style={{ fontSize: 20, fontWeight: 800, marginLeft: 10 }}>{pageName}?</span>
      </p>
    </PopUp>;
  };

  const _renderPopOverSetting = (pageName: string, id: string, index: number) => {
    return (
      <>
        <Popover content="Duplicate Page" >
          <Button className={`${styles.btn}`} icon={<i className="far fa-copy"></i>} size='middle' shape='round' danger onClick={PopUp.show(`duplicate-page-${id}-form`)} />
        </Popover>
        <Popover content="Delete Page" >
          <Button className={`${styles.btn}`} icon={<i className="fas fa-trash"></i>} size='middle' shape='round' danger onClick={PopUp.show(`alert-confirm-${pageName}`)} />
        </Popover>
        <Popover content="Information of Page" >
          <Button className={`${styles.btn}`} icon={<i className="fas fa-cog"></i>} size='middle' shape='round' danger onClick={PopUp.show(`change-general-data-page-${id}-form`)} />
        </Popover>
        {_renderAlertConfirm(pageName, index)}
      </>
    );
  };

  const _renderExtend = ({ id, pageName, pathName, isHome }: PageGeneralData, index: number) => {
    return (
      <>
        <PopOver id={id} content={_renderPopOverSetting(pageName, id, index)} trigger='click'>
          <Button
            className={`${styles.extendBtn}`}
            icon={<i className="fas fa-ellipsis-h"></i>}
            size='middle'
          />
        </PopOver>
        <FormChangeGeneralDataPage redirectOnChange pageId={id} />
      </>
    )
  }

  const _renderPage = ({ id, pageName, pathName, isHome }: PageGeneralData, index: number) => {
    return (
      <div className={`${styles.page} ${nowPage.pathName === pathName ? styles.active : ''}`}>
        <Link className={`${styles.link}`} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} key={id}>
          <div className={styles.pageName}>
            {isHome && <span className={styles.homeIcon} style={{ marginRight: 10 }}>
              <i className="fas fa-home" />
            </span>}
            {pageName}
          </div>
        </Link>
        {_renderExtend({ id, pageName, pathName, isHome }, index)}
        <FormDuplicatePage pageId={id} pageNameSourcePage={pageName} pathNameSourcePage={pathName} />
      </div>
    );
  };

  const _renderPages = () => {
    return listPages.map((page, index) => _renderPage(page, index));
  };

  const _renderSuccess = () => {
    return <>
      {_renderPages()}
      <ButtonGroup>
        <Button className={`${styles.addBtn} ${styles.page}`} onClick={PopUp.show('add-page-form')}>
          Add New Page
        </Button>
      </ButtonGroup>
      <FormAddNewPage suggestHomePage={false} />
    </>;
  };

  const _renderSwitch = () => {
    switch (statusRequest) {
      case 'loading':
        return <Loading />;
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageErr }} />;
      case 'success':
        return <div className={'PageTab'} style={{ marginTop: 15 }}>{_renderSuccess()}</div>;
      default:
        return null;
    }
  };

  const _renderDeleteSwitch = () => {
    if (statusDelete === 'deleting') return <LoadingCircle />;
    if (statusDelete === 'deleteFail') return <Redirect to={{ pathname: '/error', state: messageErr }} />;
    else return null;
  };

  return (
    <>
      {_renderDeleteSwitch()}
      {_renderSwitch()}
    </>
  );
};

export default PageTab;
