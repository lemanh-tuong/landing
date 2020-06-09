import MyFirebase from "firebase/myFirebase";
import { createAsyncAction } from "utils/functions/reduxActions";

export interface ActionInitializePayload extends MyFirebase {

};

const actionInitialize = createAsyncAction(['@initializing', '@initialized', '@initiallizeFailure'])<null, ActionInitializePayload, string>();

export { actionInitialize };

