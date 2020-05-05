import { authentication } from './authentication';

export const signOutFirebase = () => {
  authentication.signOut();
};
