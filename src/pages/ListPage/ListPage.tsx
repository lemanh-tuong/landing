import { Input } from 'antd';
import Loading from 'components/Loading/Loading';
import PopUp from 'components/PopUp/PopUp';
import { useMount } from 'hooks/useMount';
import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './ListPage.module.scss';
import { PageGeneralData } from './ListPageType/type';
import { listPage, message, statusRequest } from './selectors';
import thunkAddNewPage from './thunks/thunkAddNewPage/thunkAddNewPage';
import thunkGetListPageName from './thunks/thunkGetListPageName/thunkGetListPageName';

const ListPage = () => {

  const [pathName, setPathName] = useState('');
  const [pageName, setPageName] = useState('');

  const handleChangePathName = (e: ChangeEvent<HTMLInputElement>) => {
    setPathName(e.target.value);
  };
  const handleChangePageName = (e: ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };

  //Selectors
  const status = useSelector(statusRequest);
  const listPageName = useSelector(listPage);
  const messageErr = useSelector(message);

  const getListPageName = thunkGetListPageName();
  const addNewPage = thunkAddNewPage();

  const handleAddNewPage = () => {
    addNewPage({ pageName: pageName, pathName: pathName, id: uuidv4() });
  };

  useMount(() => {
    getListPageName();
  });

  const _renderPage = ({ id, pageName, pathName }: PageGeneralData) => {
    return (
      <Link to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} key={uuidv4()}>
        <div className={styles.page}>
          <p>{pageName}</p>
        </div>
      </Link>
    );
  };

  const _renderPages = () => {
    return listPageName.map(page => _renderPage(page));
  };

  const _renderSuccess = () => {
    return <>
      {_renderPages()}
      <div className={styles.addPage} onClick={PopUp.show('add-page-form')}> Add Page </div>
      <PopUp id="add-page-form" type='antd' onCancel={PopUp.hide('add-page-form')} onOk={handleAddNewPage}>
        <Input required addonBefore="pathName" onChange={handleChangePathName} />
        <Input required addonBefore="Page Name" onChange={handleChangePageName} />
      </PopUp>
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

export default ListPage;
