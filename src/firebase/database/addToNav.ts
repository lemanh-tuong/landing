import { NavProps } from 'components/Nav/Nav';
import database from './myFirebase';

export type AddToNavArg = Partial<NavProps> & {
  indexInsert?: number;
};

function addToNav({logo, navItems}: AddToNavArg) {
  database.ref('nav').set({
    logo: logo,
    navItems: navItems
  }).then(() => 'Added')
  .catch(err => err);
}

export default addToNav;
