import { Button } from 'antd';
import { sections } from 'pages/SettingsPage/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '../../../../../components/Image/Image';
export interface FormImageProps {
  nowIndexSection: number;
}

const FormImage: FC<FormImageProps> = ({ nowIndexSection }) => {

  //Selector
  const element = useSelector(sections)[nowIndexSection];
  // Destructoring
  const { imageSectionCol } = element;

  return (
    <div>
      {imageSectionCol ? <Image type='tagImg' imgSrc={imageSectionCol?.imgSrc} style={{ width: '50%', marginBottom: 10 }} /> : null}
      <Button shape='round' size='large' danger>
        <Link to={`/gallery?type=imageSectionCol&nowIndexSection=${nowIndexSection}&multiple=false`}>
          Change Image
        </Link>
      </Button>
    </div>
  )
}

export default FormImage;
