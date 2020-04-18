import { Button } from 'antd';
import 'antd/es/style/css';
import RollSelect from 'components/Form/RollSelect/RollSelect';
import { useMount } from 'hooks/useMount';
import thunkChangeIconCard from 'pages/ImageGalleryPage/thunks/thunkChangeIconCard/thunkChangeIconCard';
import thunkChooseImage from 'pages/ImageGalleryPage/thunks/thunkChooseImage/thunkChooseImage';
import thunkGetImageGallery from 'pages/ImageGalleryPage/thunks/thunkGetImageGallery/thunkGetImageGallery';
import thunkUploadFile from 'pages/ImageGalleryPage/thunks/thunkUploadFile/thunkUploadFile';
import thunkSaveAll from 'pages/SettingsPage/thunks/thunkSaveAll/thunkSaveAll';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import getQuery from 'utils/functions/getQuery';
import styles from './ImageGalleryPage.module.scss';
import { iconGallery, imageSectionCol, messageRequestImageFailure, messageUploadFileFailure, sliderImgsGallery, statusRequestImage, statusUploadFile } from './selectors';

const ImageGalleryPage = () => {
  const history = useHistory();
  // Selector
  // -Gallery
  const sliderImgs = useSelector(sliderImgsGallery)
  const icon = useSelector(iconGallery);
  const imageSection = useSelector(imageSectionCol);
  // -Request Gallery
  const statusRequestGallery = useSelector(statusRequestImage);
  const messageRequest = useSelector(messageRequestImageFailure);
  // -Upload File
  const statusUpload = useSelector(statusUploadFile);
  const messageUpload = useSelector(messageUploadFileFailure);

  // Destructoring
  const { type, nowIndexSection, nowIndexCard, multiple } = getQuery<'type' | 'nowIndexSection' | 'nowIndexCard' | 'multiple'>(history.location.search, ['type', 'nowIndexSection', 'nowIndexCard', 'multiple']);

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
        chooseIcon({ fieldName: fieldName, imgSrc: result, nowIndexSection: parseInt(nowIndexSection), nowIndexCard: parseInt(nowIndexCard) });
      }
    }
    return (result: any) => {
      chooseImage({ fieldName: fieldName, src: result, nowIndexSection: parseInt(nowIndexSection) });
    }
  }

  const handleUploadFile = (typeImage: "icon" | "imgSrc" | "imageSectionCol" | "sliderImgs") => {
    if (!!nowIndexSection) {
      return (result: File[]) => {
        upload({ path: typeImage, files: result });
      }
    }
  }
  const handleSaveAll = () => {
    save();
  }

  useMount(() => {
    if (!!type) {
      getImage(type as "icon" | "imgSrc" | "imageSectionCol" | "sliderImgs")
    }
  })

  const _renderSwitch = () => {
    if (!!type) {
      switch (statusRequestGallery) {
        case 'success':
          return <RollSelect
            fieldName={type}
            listImg={type === 'iconImg' ? icon : type === 'sliderImgs' ? sliderImgs : imageSection}
            multiple={JSON.parse(multiple)}
            statusUploadFile={statusUpload}
            messageUpload={messageUpload}
            onChoose={handleChoose(type)}
            onUploadFile={handleUploadFile(type as "icon" | "imgSrc" | "imageSectionCol" | "sliderImgs")} />;
        case 'loading':
          return <RollSelect fieldName={type} statusLazy="loading" listImg={[]} ammountLazyLoading={10} />
        case 'failure':
          return <div>{messageRequest}</div>;
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
