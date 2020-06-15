import { actionSetProjectName } from "pages/CreateNewProjectPage/actions/actionSetProjectName";
import { ActionTypes, createReducer, handleAction } from "utils/functions/reduxActions";

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

const projectReducers = createReducer<ProjectReducers, ActionTypes<typeof actionSetProjectName> & any>(initialState, [
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
  })),
  handleAction('@setProjectName', state => ({
    ...state,
  })),
  handleAction('@settedProjectName', (state, action) => ({
    ...state,
    projectName: action.payload
  })),
  handleAction('@setProjectNameFailure', (state, action) => ({
    ...state,
    messageRequestProject: action.payload,
    statusRequestProJect: 'failure',
  }))
]);

export default projectReducers;
