import React from 'react';
import thunkGetImageGallery from 'pages/ImageGalleryPage/thunks/thunkGetImageGallery/thunkGetImageGallery';
import { useMount } from 'hooks/useMount';
import RollSelect from 'components/Form/RollSelect/RollSelect';
import { useSelector } from 'react-redux';
import { statusRequestImage, sliderImgsGallery, iconGallery, imageSectionCol } from 'pages/SettingsPage/selectors';
import { RouteComponentProps } from 'react-router';
import thunkChooseImage from 'pages/ImageGalleryPage/thunks/thunkChooseImage/thunkChooseImage';
import thunkSaveAll from 'pages/SettingsPage/thunks/thunkSaveAll/thunkSaveAll';
import { Button } from 'antd';
import 'antd/es/style/css';
import styles from './ImageGalleryPage.module.scss';
import { Link } from 'react-router-dom';
import getQuery from 'utils/functions/getQuery';
import thunkChangeIconCard from 'pages/ImageGalleryPage/thunks/thunkChangeIconCard/thunkChangeIconCard';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';

const ImageGalleryPage = ({ match }: RouteComponentProps) => {
  // Selector
  const sliderImgs = useSelector(sliderImgsGallery)
  const icon = useSelector(iconGallery);
  const imageSection = useSelector(imageSectionCol);
  const status = useSelector(statusRequestImage);

  // Destructoring

  const { type, nowIndexSection, nowIndexCard, multiple } = getQuery<'type' | 'nowIndexSection' | 'nowIndexCard' | 'multiple'>(window.location.search, ['type', 'nowIndexSection', 'nowIndexCard', 'multiple']);

  // Dispatch
  const getImage = thunkGetImageGallery();
  const chooseImage = thunkChooseImage();
  const chooseIcon = thunkChangeIconCard();
  const save = thunkSaveAll();
  const upload = thunkUploadFile();

  // Handle
  const handleChoose = (fieldName: string) => {
    if (type === 'iconImg') {
      return (result: any) => {
        chooseIcon(fieldName, result, parseInt(nowIndexSection), parseInt(nowIndexCard));

      }
    }
    return (result: any) => {
      if (!!nowIndexSection) {
        chooseImage(fieldName, result, parseInt(nowIndexSection));
      }
    }
  }

  const handleUploadFile = (fieldName: any) => {
    if (!!nowIndexSection) {
      return (result: File) => {
        upload(fieldName, fieldName, result, parseInt(nowIndexSection))
      }
    }
  }
  const handleSaveAll = () => {
    save();
  }

  useMount(() => {
    if (!!type) {
      getImage(type as any)
    }
  })


  const _renderSwitch = () => {
    if (!!type) {
      switch (status) {
        case 'success':
          return <RollSelect fieldName={type} listImg={type === 'iconImg' ? icon : type === 'sliderImgs' ? sliderImgs : imageSection} multiple={JSON.parse(multiple)} onChoose={handleChoose(type)} onUploadFile={handleUploadFile(type)} />;
        case 'loading':
          return <RollSelect fieldName={type} statusLazy="loading" listImg={[]} ammountLazyLoading={10} />
        case 'failure':
          return <div>Error</div>;
        default:
          return null;
      }
    }
  }

  return (
    <>
      {_renderSwitch()}
      <Button shape='circle' size='large' className={styles.goBackBtn} onClick={handleSaveAll}>
        <Link to='/settings'>
          <i className="fas fa-arrow-left"></i>
        </Link>
      </Button>
    </>
  );

}

export default ImageGalleryPage;
