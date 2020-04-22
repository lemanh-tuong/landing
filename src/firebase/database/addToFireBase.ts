import { Option, PageProps } from '../../pages/SettingsPage/SettingsPage';
import database from './myFirebase';

export type AddToFireBaseArg = PageProps & {
  newSection?: Option;
  indexInsert?: number;
}

function addToFireBase({pageName, elements, newSection, indexInsert}: AddToFireBaseArg) {
  if(!!newSection) {
    const newElements = !!indexInsert && indexInsert > 0
    ? [...elements.slice(0, indexInsert), {...newSection}, ...elements.slice(indexInsert, elements.length)]
    : (indexInsert === 0) ? [{...newSection}, ...elements]
    : elements.concat(newSection);
    database.ref(`HomePage`).set({
      pageName: pageName,
      elements: [...newElements]
    }).then(res => "Added")
    .catch(err => err);
  } else {
    database.ref(`HomePage`).set({
      pageName: pageName,
      elements: [...elements]
    }).then(res => "Added")
    .catch(err => err);
  }
}

export default addToFireBase;
