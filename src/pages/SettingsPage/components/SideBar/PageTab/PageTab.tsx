import Loading from 'components/Loading/Loading';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { listPage, messageRequestListPage, statusRequestListPage } from 'pages/SettingsPage/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styles from './PageTab.module.scss';

const PageTab = () => {
  const listPages = useSelector(listPage);
  const status = useSelector(statusRequestListPage);
  const messageErr = useSelector(messageRequestListPage);


  const _renderPage = ({ id, pageName, pathName }: PageGeneralData) => {
    return (
      <Link to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} key={id}>
        <div className={styles.page}>
          <p>{pageName}</p>
        </div>
      </Link>
    );
  };

  const _renderPages = () => {
    return listPages.map(page => _renderPage(page));
  };

  const _renderSuccess = () => {
    return <>
      {_renderPages()}
    </>;
  };

  const _renderSwitch = () => {
    switch (status) {
      case 'loading':
        return <Loading />;
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageErr }} />;
      case 'success':
        return <div className={styles.ListPage}>{_renderSuccess()}</div>;
      default:
        return null;
    }
  };

  return _renderSwitch();
};

export default PageTab;
