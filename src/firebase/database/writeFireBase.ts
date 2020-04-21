import { PageProps } from '../../pages/SettingsPage/SettingsPage';
import database from './database';

function writeFireBase({pageName, elements}: PageProps) {
  database.ref(`HomePage`).set({
    pageName: pageName,
    elements: [...elements]
  }).then(res => console.log(res));
}
export default writeFireBase;
