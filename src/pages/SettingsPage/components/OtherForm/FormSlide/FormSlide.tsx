import { Button } from 'antd';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { SlideType } from 'components/MockUp/MockUp';
import thunkChangeHasVideo from 'pages/SettingsPage/thunks/thunkChangeHasVideo/thunkChangeHasVideo';
import thunkChangeHref from 'pages/SettingsPage/thunks/thunkChangeHref/thunkChangeHref';
import thunkChangeVideoUrl from 'pages/SettingsPage/thunks/thunkChangeVideoUrl/thunkChangeVideoUrl';
import thunkDeleteSlide from 'pages/SettingsPage/thunks/thunkDeleteSlide/thunkDeleteSlide';
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './FormSlide.module.scss';

export interface FormSlideProps {
  slideProperty: SlideType & { [key: string]: any };
  nowIndexSection: number;
  nowIndexSlide: number;
}


const FormSlide: FC<FormSlideProps> = ({ slideProperty, nowIndexSection, nowIndexSlide }) => {
  // Destructoring
  const { imgSrc, hasVideo, videoUrl, href } = slideProperty;

  // Dispatch
  const changeUrl = thunkChangeVideoUrl();
  const changeHasVideo = thunkChangeHasVideo();
  const changeHref = thunkChangeHref();
  const deleteSlide = thunkDeleteSlide();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input' && fieldName === 'videoUrl') {
        changeUrl({ newUrl: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide })
      }
      if (fieldType === 'input' && fieldName === 'href') {
        changeHref({ href: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide })
      }
      if (fieldType === 'checkbox') {
        changeHasVideo({ hasVideo: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide })
      }
    }
  }

  const handleDelete = () => {
    deleteSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide })
  }

  return (
    <div className={styles.formSlide}>
      <Button className={styles.deleteBtn} icon={<i className="fas fa-trash"></i>} shape='circle-outline' size='large' onClick={handleDelete} />
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

          {
            fieldType: 'input',
            fieldName: 'href',
            fieldId: 'section-3-field-8',
            defaultValue: href,
            hidden: !!hasVideo,
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
