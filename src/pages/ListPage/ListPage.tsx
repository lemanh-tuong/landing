import { projectName, statusRequestProject } from 'pages/InitializeProjectPage/selectors/selectors';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import styles from './ListPage.module.scss';

const ListPage = () => {

  //Selectors
  const statusRequestNowProjectName = useSelector(statusRequestProject);
  const nowProjectName = useSelector(projectName);

  if (statusRequestNowProjectName === 'success' && !nowProjectName) {
    return <Redirect to={'/admin/projectName'} />
  }

  return (
    <div className={styles.ListPage}>
      <SideBar />
      <Switch>
        <Route exact path='/admin/list'>
          <MainContent />
        </Route>
        <Route exact path='/admin/list/profile'>
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
};

export default ListPage;
