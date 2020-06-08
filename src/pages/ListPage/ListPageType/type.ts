import { Option } from 'pages/SettingsPage/SettingsPage';

export interface PageGeneralData {
  id: string;
  pathName: string;
  pageName: string;
  isHome?: boolean;
}

export interface PageDetailData extends PageGeneralData {
  elements: Option[];
}
