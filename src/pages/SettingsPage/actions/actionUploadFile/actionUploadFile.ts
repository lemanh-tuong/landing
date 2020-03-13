import { createAction } from 'utils/functions/reduxActions';

export interface ActionUploadFile {
  type: 'UPLOAD_FILE';
  payload: {
    file: File;
    path: string;
    nowIndex: number
  };
}

const uploadFile = createAction('UPLOAD_FILE', (payload: ActionUploadFile['payload']) => {
  return {
    ...payload
  };
});

export { uploadFile };

