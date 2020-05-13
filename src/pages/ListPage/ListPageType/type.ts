import { Option } from 'pages/SettingsPage/SettingsPage';

export interface PageGeneralData {
  id: string;
  pathName: string;
  pageName: string;
}

export interface PageDetailData extends PageGeneralData {
  elements: Option[];
}
