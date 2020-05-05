import { authentication } from './authentication';

export interface SignInFirebaseArg {
  email: string;
  password: string;
}

export const signInFirebase = ({email, password}: SignInFirebaseArg) => authentication.signInWithEmailAndPassword(email, password);

