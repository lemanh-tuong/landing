import { authentication } from './authentication';

export const resetPassword = (email: string) => {
  authentication.sendPasswordResetEmail(email);
};


