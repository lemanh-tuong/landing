import { Button } from 'antd';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { SlideType } from 'components/MockUp/MockUp';
import { TypeSlideSection13 } from 'components/Section13/Section13';
import { TypeSlideSection5 } from 'components/Section5/Section5';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddSlide from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkAddSlide/thunkAddSlide';
import thunkChangeHasVideo from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkChangeHasVideo/thunkChangeHasVideo';
import thunkChangeHref from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkChangeHref/thunkChangeHref';
import thunkChangeVideoUrl from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkChangeVideoUrl/thunkChangeVideoUrl';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormSlide.module.scss';

export interface FormSlideProps {
  nowIndexSection: number;
  nowIndexSlide: number;
}


export const defaultSlide = {
  imgSrc: mockUpMacContent1,
};

const FormSlide: FC<FormSlideProps> = ({ nowIndexSection, nowIndexSlide }) => {
  // Destructoring
  const elements = useSelector(sections);
  const { sliderImgs } = elements[nowIndexSection];
  const { imgSrc, hasVideo, videoUrl, href } = sliderImgs?.[nowIndexSlide] as SlideType & TypeSlideSection13 & TypeSlideSection5;

  // Dispatch
  const changeUrl = thunkChangeVideoUrl();
  const changeHasVideo = thunkChangeHasVideo();
  const changeHref = thunkChangeHref();
  const addSlide = thunkAddSlide();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input' && fieldName === 'videoUrl') {
        changeUrl({ newUrl: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
      if (fieldType === 'input' && fieldName === 'href') {
        changeHref({ href: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
      if (fieldType === 'checkbox') {
        changeHasVideo({ hasVideo: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
    };
  };

  const handleAddSlide = () => {
    addSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide, sliderProperty: defaultSlide });
  };

  return (
    <div className={styles.formSlide} style={{ borderRadius: 5, border: '1px solid' }}>
      <Form
        fields={[
          {
            fieldType: 'checkbox',
            fieldName: 'hasVideo',
            label: 'Has Video',
            fieldId: 'section-3-field-7',
            defaultChecked: !!hasVideo
          },
          {
            fieldType: 'input',
            fieldName: 'videoUrl',
            label: 'Iframe Video Url',
            fieldId: 'section-3-field-8',
            defaultValue: videoUrl,
            hidden: !hasVideo,
          },

          {
            fieldType: 'input',
            fieldName: 'href',
            label: 'Href',
            fieldId: 'section-3-field-8',
            defaultValue: href,
            hidden: !!hasVideo,
          },
        ]}
        onChange={handleChangeForm}
      >
        <Link className={styles.btn} to={`/admin/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&nowIndexSlide=${nowIndexSlide}&multiple=false`}>
          <img className={styles.img} src={imgSrc} alt='Slide' style={{ width: 200, height: 200 }} />
          <i className={`far fa-image ${styles.icon}`}></i>
        </Link>
        <Button shape='round' size='large' type='dashed' onClick={handleAddSlide} style={{ margin: '10px 0' }}>
          Add Slide
        </Button>
      </Form>
    </div>
  );
};

export default memo(FormSlide);
