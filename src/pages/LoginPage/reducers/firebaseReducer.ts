import MyFirebase from "firebase/myFirebase";
import { ActionTypes, createReducer, handleAction } from "utils/functions/reduxActions";
import { actionInitialize } from "../actions/actionInitialize";

export interface FirebaseReducer extends MyFirebase{
  statusInitialize: 'initializing' | 'initialized' | 'initializedFailure';
}

const initialState: FirebaseReducer = {
  statusInitialize: 'initializing'
} as FirebaseReducer;

const firebaseReducer = createReducer<FirebaseReducer, ActionTypes<typeof actionInitialize>>(initialState, [
  handleAction('@initializing', (state, action) => {
    return {
      ...state,
      statusInitialize: 'initializing'
    }
  }),
  handleAction('@initialized', (state, action) => {
    return {
      ...state,
      ...action.payload,
      statusInitialize: 'initialized'
    }
  }),
  handleAction('@initiallizeFailure', state  => {
    return {
      ...state,
      statusInitialize: 'initializedFailure'
    }
  }),
]);

export default firebaseReducer;
