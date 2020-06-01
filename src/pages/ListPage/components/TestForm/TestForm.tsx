import { Input } from 'antd';
import PopUp from 'components/PopUp/PopUp';
import updateFireBase from 'firebase/database/updateFireBase';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { FormChangeGeneralDataPageProps } from 'pages/SettingsPage/components/OtherForm/FormChangeGeneralDataPage/FormChangeGeneralDataPage';
import { listPage } from 'pages/SettingsPage/selectors';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

const TestForm: FC<FormChangeGeneralDataPageProps> = ({ pageId }) => {

  const generalDataPage = useSelector(listPage);
  const nowPage = generalDataPage.find(item => item.id === pageId) as PageGeneralData;

  const [newPageName, setNewPageName] = useState(nowPage.pageName);
  const [newPathName, setNewPathName] = useState(nowPage.pathName);


  const handleChangeNewPageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPageName(e.target.value);
  };
  const handleChangeNewPathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPathName(e.target.value);
  };

  const handleSubmit = () => {
    Promise.all([
      updateFireBase({
        ref: `ListPage/1`,
        updateValue: {
          id: pageId,
          pageName: newPageName,
          pathName: newPathName
        } as PageGeneralData
      }),
      updateFireBase({
        ref: `PagesDetail/test`,
        updateValue: {
          pageName: newPageName,
          pathName: newPathName
        },
      }),
    ]);
  }

  return (
    <div className="TestForm">
      <PopUp id={`change-general-data-page-${pageId}-form`} type='antd' title={<h3>Form Change General Data Page</h3>} onCancel={PopUp.hide(`change-general-data-page-${pageId}-form`)} onOk={handleSubmit}>
        <div>
          <span>New Path Name</span>
          <Input style={{ margin: '10px 0' }} defaultValue={nowPage.pathName} required onChange={handleChangeNewPathName} />
        </div>
        <div>
          <span>New Page Name</span>
          <Input style={{ margin: '10px 0' }} defaultValue={nowPage.pageName} required onChange={handleChangeNewPageName} />
        </div>
      </PopUp>
    </div>
  )
}

export default TestForm;
