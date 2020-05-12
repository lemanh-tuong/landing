import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { PageProps } from '../../pages/SettingsPage/SettingsPage';
import database from './myFirebase';

export type DeleteSectionInFireBase = PageProps & PageGeneralData & {
  indexDelete: number;
};

function deleteSectionInFirebase({pageName, id, pathName,  elements,  indexDelete}: DeleteSectionInFireBase) {
  const newElements = [...elements.slice(0, indexDelete), ...elements.slice(indexDelete + 1, elements.length)];
  database.ref(`PagesDetail/${pathName}`).set({
    pathName,
    id,
    pageName,
    elements: [...newElements]
  }).then(() => 'Added')
  .catch(err => err);
}

export default deleteSectionInFirebase;
