import { ImageProps } from 'components/Image/Image';
import { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import { TextProps } from 'components/Text/Text';
import { getPage } from 'pages/HomePage/actions/actionPage';
import { ActionTypes } from 'utils/functions/reduxActions';
export interface SectionProps extends MainTitleProps, TextProps, Omit<ImageProps, 'srcImg'> {
  sectionType: '1' | '2' | '3' | '4';
  srcImg?: string;
}

export interface Page {
  status: 'loading' | 'success' | 'failure';
  pageName: string;
  section: SectionProps[];
}

export type PageAction = ActionTypes<typeof getPage>;
