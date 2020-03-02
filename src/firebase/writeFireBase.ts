import { PageProps } from '../pages/SettingsPage/SettingsPage';
import database from './firebase';

function writeFireBase({pageName, elements}: PageProps) {
  database.ref(`HomePage`).set({
    pageName: pageName,
    elements: [...elements],
  });
}
export default writeFireBase;
