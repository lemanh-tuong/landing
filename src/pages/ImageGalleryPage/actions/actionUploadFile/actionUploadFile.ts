import { createAsyncAction } from 'utils/functions/reduxActions';

export interface ActionUploadFilePayload {
  type: 'icon' | 'iconCard2' | 'imgSrc' | 'backgroundImage' | 'sliderImgs' | 'imageSectionCol' | 'logoImg' | 'avatarAuthor' | 'sliderSectionImg' | 'imageButton';
  imgs: string[];
}

const actionUploadFile = createAsyncAction(['@uploadingFile', '@uploadedFile', '@uploadFileFailure'])<null, ActionUploadFilePayload, string>();

export { actionUploadFile };

