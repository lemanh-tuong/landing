import { ActionTypes, createReducer, handleAction } from "utils/functions/reduxActions";
import { actionGetProjectName } from "../actions/actionGetProjectName";

export interface ProjectReducers {
  readonly statusRequestProJect: 'loading' | 'success' | 'failure';
  readonly projectName: string;
  readonly messageRequestProject: string;
}

const initialState: ProjectReducers = {
  projectName: '',
  messageRequestProject: '',
  statusRequestProJect: 'loading'
}

const projectReducers = createReducer<ProjectReducers, ActionTypes<typeof actionGetProjectName> & any>(initialState, [
  handleAction('@getProjectNameRequest', state => ({
    ...state,
    statusRequestProJect: 'loading'
  })),
  handleAction('@getProjectNameSuccess', (state, action) => ({
    ...state,
    projectName: action.payload,
    statusRequestProJect: 'success'
  })),
  handleAction('@getProjectNameFailure', (state, action) => ({
    ...state,
    statusRequestProJect: 'failure',
    messageRequestProject: action.payload
  }))
]);

export default projectReducers;
