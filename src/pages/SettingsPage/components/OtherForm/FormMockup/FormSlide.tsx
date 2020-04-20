import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { SlideType } from 'components/MockUp/MockUp';
import thunkChangeHasVideo from 'pages/SettingsPage/thunks/thunkChangeHasVideo/thunkChangeHasVideo';
import thunkChangeVideoUrl from 'pages/SettingsPage/thunks/thunkChangeVideoUrl/thunkChangeVideoUrl';
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './FormSlide.module.scss';

export interface FormSlideProps {
  slideProperty: SlideType;
  nowIndexSection: number;
  nowIndexSlide: number;
}


const FormSlide: FC<FormSlideProps> = ({ slideProperty, nowIndexSection, nowIndexSlide }) => {
  // Destructoring
  const { imgSrc, hasVideo, videoUrl } = slideProperty;

  // Dispatch
  const changeUrl = thunkChangeVideoUrl();
  const changeHasVideo = thunkChangeHasVideo();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        changeUrl({ newUrl: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide })
      }
      if (fieldType === 'checkbox') {
        changeHasVideo({ hasVideo: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide })
      }
    }
  }

  return (
    <div>
      <Form
        fields={[
          {
            fieldType: 'checkbox',
            fieldName: 'hasVideo',
            fieldId: 'section-3-field-7',
            name: "Has Video",
            defaultChecked: !!hasVideo
          },
          {
            fieldType: 'input',
            fieldName: 'videoUrl',
            fieldId: 'section-3-field-8',
            defaultValue: videoUrl,
            hidden: !hasVideo,
          },
        ]}
        onChange={handleChangeForm}
      >
        <Link className={styles.btn} to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&nowIndexSlide=${nowIndexSlide}&multiple=false`}>
          <img className={styles.img} src={imgSrc} alt='Slide' style={{ width: 200, height: 200 }} />
          <i className={`far fa-image ${styles.icon}`}></i>
        </Link>
      </Form>
    </div>
  )
};

export default memo(FormSlide);
