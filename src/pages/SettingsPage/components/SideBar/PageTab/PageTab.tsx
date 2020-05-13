import { Button } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Loading from 'components/Loading/Loading';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { listPage, messageRequestListPage, statusRequestListPage } from 'pages/SettingsPage/selectors';
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
  const nowPage = getQuery(history.location.search, ['pageName']);
  const listPages = useSelector(listPage);
  const status = useSelector(statusRequestListPage);
  const messageErr = useSelector(messageRequestListPage);

  const deletePage = thunkDeletePage();

  const handleDeletePage = (indexDelete: number) => {
    return () => {
      deletePage(indexDelete);
      history.push('/list');
    };
  };


  const _renderPage = ({ id, pageName, pathName }: PageGeneralData, index: number) => {
    if (nowPage.pageName === pageName) {
      return (
        <div className={`${styles.page}  ${styles.active}`}>
          <Link className={`${styles.link}`} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} key={id}>
            <div className={styles.pageName}>
              {pageName}
            </div>
          </Link>
          <ButtonGroup style={{ flex: '1 0' }}>
            <Button className={`${styles.btn}`} icon={<i className="far fa-copy"></i>} size='middle' shape='round' danger onClick={PopUp.show('duplicate-page-form')} />
            <Button className={`${styles.btn}`} icon={<i className="fas fa-trash"></i>} size='middle' shape='round' danger onClick={handleDeletePage(index)} />
            <Button className={`${styles.btn}`} icon={<i className="fas fa-cog"></i>} size='middle' shape='round' danger onClick={PopUp.show(`change-general-data-page-${id}-form`)} />
          </ButtonGroup>
          <FormChangeGeneralDataPage pageId={id} />
        </div>
      );
    }
    return (
      <div className={styles.page}>
        <Link className={`${styles.btn}`} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} key={id}>
          <div className={styles.pageName}>
            {pageName}
          </div>
        </Link>
        <FormChangeGeneralDataPage pageId={id} />
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
        <Button size='middle' shape='round' danger onClick={PopUp.show('add-page-form')}>
          Add New Page
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
