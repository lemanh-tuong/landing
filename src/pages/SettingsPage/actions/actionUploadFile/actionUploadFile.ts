import { createAction } from 'utils/functions/reduxActions';

export interface ActionUploadFile {
  type: 'UPLOAD_FILE';
  payload: File;
}

const uploadFile = createAction('UPLOAD_FILE', (payload: File) => {
  return payload;
});

export { uploadFile };

