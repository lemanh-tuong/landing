import { PageProps } from '../../pages/SettingsPage/SettingsPage';
import database from './myFirebase';

export type DeleteSectionInFireBase = PageProps & {
  indexDelete: number;
};

function deleteSectionInFirebase({pageName, elements,  indexDelete}: DeleteSectionInFireBase) {
  const newElements = [...elements.slice(0, indexDelete), ...elements.slice(indexDelete + 1, elements.length)];
  database.ref(`HomePage`).set({
    pageName: pageName,
    elements: [...newElements]
  }).then(() => 'Added')
  .catch(err => err);
}

export default deleteSectionInFirebase;
