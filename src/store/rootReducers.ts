import rootComponentPageReducers from 'pages/ComponentPage/rootReducers/rootReducers';
import rootReducersImageGallery from 'pages/ImageGalleryPage/rootReducers/rootReducers';
import rootInitializeProjectPageReducers from 'pages/InitializeProjectPage/rootReducers/rootReducers';
import rootListPageReducers from 'pages/ListPage/rootReducers/rootReducers';
import rootLoginPageReducers from 'pages/LoginPage/rootReducers/rootReducers';
import rootMainPageReducers from 'pages/MainPage/rootReducers/rootReducers';
import rootSettingsPageReducers from 'pages/SettingsPage/rootReducers/rootReducers';

const rootReducers = {
  ...rootReducersImageGallery,
  ...rootSettingsPageReducers,
  ...rootComponentPageReducers,
  ...rootMainPageReducers,
  ...rootLoginPageReducers,
  ...rootListPageReducers,
  ...rootInitializeProjectPageReducers,
};

export default rootReducers;
