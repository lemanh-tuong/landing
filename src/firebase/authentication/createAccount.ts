import { authentication } from "./authentication"

export interface CreateAccountArg {
  email: string;
  password: string;
}

export const createAccount = ({email, password}: CreateAccountArg) => {
  authentication.createUserWithEmailAndPassword(email, password)
}
