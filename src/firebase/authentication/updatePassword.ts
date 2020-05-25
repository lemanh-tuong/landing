import { authentication } from './authentication';

const updatePassword = (password: string) => {
  authentication.currentUser?.updatePassword(password);
};

export { updatePassword };
