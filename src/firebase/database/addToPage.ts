import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { Option, PageProps } from '../../pages/SettingsPage/SettingsPage';
import database from './myFirebase';

export type AddToPageArg = PageProps & PageGeneralData & {
  newSection?: Option;
  indexInsert?: number;
};

function addToPage({pageName, elements, newSection, id, pathName, indexInsert}: AddToPageArg) {
  if(!!newSection) {
    const newElements = !!indexInsert && indexInsert > 0
    ? [...elements.slice(0, indexInsert), {...newSection}, ...elements.slice(indexInsert, elements.length)]
    : (indexInsert === 0) ? [{...newSection}, ...elements]
    : elements.concat(newSection);
    database.ref(`PagesDetail/${pageName}`).set({
      pageName: pageName,
      elements: [...newElements],
      id: id,
      pathName: pathName,
    }).then(() => 'Added')
    .catch(err => err);
  } else {
    database.ref(`PagesDetail/${pageName}`).set({
      pageName: pageName,
      elements: [...elements],
      id: id,
      pathName: pathName,
    }).then(() => 'Added')
    .catch(err => err);
  }
}

export default addToPage;
