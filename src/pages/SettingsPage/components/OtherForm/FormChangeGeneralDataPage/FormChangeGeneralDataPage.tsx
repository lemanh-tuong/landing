import { Input } from 'antd';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { listPage } from 'pages/ListPage/selectors';
import thunkChangeGeneralDataPage from 'pages/SettingsPage/thunks/thunkPage/thunkChangeGeneralDataPage/thunkChangeGeneralDataPage';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

export interface FormChangeGeneralDataPageProps {
  pageId: string;
}

const FormChangeGeneralDataPage: FC<FormChangeGeneralDataPageProps> = ({ pageId }) => {

  const generalDataPage = useSelector(listPage);
  const nowPage = generalDataPage.find(item => item.id === pageId) as PageGeneralData;

  const [newPageName, setNewPageName] = useState('');
  const [newPathName, setNewPathName] = useState('');

  const changeGeneralDataPage = thunkChangeGeneralDataPage();

  const handleChangeNewPageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPageName(e.target.value);
  };
  const handleChangeNewPathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPathName(e.target.value);
  };

  const handleChangeGeneralDataPage = () => {
    changeGeneralDataPage({ newPageName, newPathName, id: pageId });
  };

  return (
    <PopUp id={`change-general-data-page-${pageId}-form`} type='antd' onCancel={PopUp.hide(`change-general-data-page-${pageId}-form`)} onOk={handleChangeGeneralDataPage}>
      <Input style={{ margin: 5 }} defaultValue={nowPage.pathName} required addonBefore="New Path Name" onChange={handleChangeNewPathName} />
      <Input style={{ margin: 5 }} defaultValue={nowPage.pageName} required addonBefore="New Page Name" onChange={handleChangeNewPageName} />
    </PopUp>
  );
};

export default FormChangeGeneralDataPage;
