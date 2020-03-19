import { ImageProps } from 'components/Image/Image';
import { MainTitleProps } from 'components/MainTitle/MainTitle';
import { TextProps } from 'components/Text/Text';
import { getPageData } from 'pages/HomePage/actions/actionGetPageData';
import { ActionTypes } from 'utils/functions/reduxActions';
export interface SectionProps extends MainTitleProps, TextProps, Omit<ImageProps, 'imgSrc'> {
  sectionType: '1' | '2' | '3' | '4';
  imgSrc?: string;
}

export interface PageState {
  status: 'loading' | 'success' | 'failure';
  pageName: string;
  section: SectionProps[];
}

export type PageAction = ActionTypes<typeof getPageData>;
