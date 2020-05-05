import { ImageProps } from 'components/Image/Image';
import { MainTitleProps } from 'components/MainTitle/MainTitle';
import { TextProps } from 'components/Text/Text';
import { getDataSections } from 'pages/HomePage/actions/actionGetSections';
import { ActionTypes } from 'utils/functions/reduxActions';

export type SectionProps = {
  sectionType: '1' | '2' | '3' | '4';
  imgSrc?: string;
} & Omit<MainTitleProps, 'isBuilder' | 'onEditable'>
& Omit<TextProps, 'isBuilder' | 'onEditable'>
& Omit<ImageProps, 'imgSrc' | 'isBuilder' | 'onEditable'>;

export interface PageState {
  status: 'loading' | 'success' | 'failure';
  pageName: string;
  section: SectionProps[];
}

export type PageAction = ActionTypes<typeof getDataSections>;
