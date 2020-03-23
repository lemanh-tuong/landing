import { createAction } from 'utils/functions/reduxActions';

export interface ActionUploadFile {
  type: 'UPLOAD_FILE';
  payload: {
    path: string;
    fieldName: string;
    newImgs: string[];
    nowIndexSection: number,
  };
}

const uploadFile = createAction('UPLOAD_FILE', (payload: ActionUploadFile['payload']) => {
  return {
    ...payload
  };
});

export { uploadFile };

