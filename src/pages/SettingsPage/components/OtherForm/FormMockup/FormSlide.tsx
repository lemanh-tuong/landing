import { Button } from 'antd';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { SlideType } from 'components/MockUp/MockUp';
import thunkChangeHasVideo from 'pages/SettingsPage/thunks/thunkChangeHasVideo/thunkChangeHasVideo';
import thunkChangeVideoUrl from 'pages/SettingsPage/thunks/thunkChangeVideoUrl/thunkChangeVideoUrl';
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export interface FormSlideProps {
  slideProperty: SlideType;
  nowIndexSection: number;
  nowIndexSlide: number;
}


const FormSlide: FC<FormSlideProps> = ({ slideProperty, nowIndexSection, nowIndexSlide }) => {
  // Destructoring
  const { hasVideo, videoUrl } = slideProperty;

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
        <Button shape='round' size='large' danger>
          <Link to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&multiple=true`}>
            Change Image
        </Link>
        </Button>
      </Form>
    </div>
  )
};

export default memo(FormSlide);
