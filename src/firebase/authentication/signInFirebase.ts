import { authentication } from './authentication';

export interface SignInFirebaseArg {
  email: string;
  password: string;
}

export const signInFirebase = ({email, password}: SignInFirebaseArg) => {
  return authentication.signInWithEmailAndPassword(email, password);
};

