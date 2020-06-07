import { Button } from 'antd';
import 'antd/es/style/css';
import RollSelect from 'components/Form/RollSelect/RollSelect';
import { useMount } from 'hooks/useMount';
import thunkChangeIconCard from 'pages/ImageGalleryPage/thunks/thunkChangeIconCard/thunkChangeIconCard';
import thunkChooseImage from 'pages/ImageGalleryPage/thunks/thunkChooseImage/thunkChooseImage';
import thunkGetImageGallery from 'pages/ImageGalleryPage/thunks/thunkGetImageGallery/thunkGetImageGallery';
import thunkUploadFile from 'pages/ImageGalleryPage/thunks/thunkUploadFile/thunkUploadFile';
import thunkChangeImgSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeImgSlide2/thunkChangeImgSlide2';
import thunkSaveAll from 'pages/SettingsPage/thunks/thunksSection/thunkSaveAll/thunkSaveAll';
import thunkChangeImgSlide from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkChangeImgSlide/thunkChangeImgSlide';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import getQuery from 'utils/functions/getQuery';
import styles from './ImageGalleryPage.module.scss';
import { avatarAuthorGallery, iconCard2Gallery, iconGallery, iconImgInColGallery, id, imageButtonGallery, imageSectionCol, logoImgGallery, messageRequestImageFailure, messageUploadFileFailure, sliderImgsGallery, sliderSectionImgGallery, statusRequestImage, statusUploadFile } from './selectors';
import thunkChangeAvatarAuthor from './thunks/thunkChangeAvatarAuthor/thunkChangeAvatarAuthor';
import thunkChangeIconCard2 from './thunks/thunkChangeIconCard2/thunkChangeIconCard2';
import thunkChangeIconInCol from './thunks/thunkChangeIconInCol/thunkChangeIconInCol';
import thunkChangeImageButton from './thunks/thunkChangeImageButton/thunkChangeImageButton';
import thunkChangeLogoImg from './thunks/thunkChangeLogoImg/thunkChangeLogoImg';

// type GetQueryType = 'type' | 'nowIndexSection' | 'nowIndexCard' | 'nowIndexSlide' | 'nowIndexRate' | 'multiple';

const ImageGalleryPage = () => {
  const history = useHistory();
  const [param, setParam] = useState<any>({});
  // Selector

  // -Gallery
  const sliderImgs = useSelector(sliderImgsGallery);
  const icon = useSelector(iconGallery);
  const iconCard2 = useSelector(iconCard2Gallery);
  const imageSection = useSelector(imageSectionCol);
  const avatarAuthor = useSelector(avatarAuthorGallery);
  const iconImgInCol = useSelector(iconImgInColGallery);
  const sliderSectionImg = useSelector(sliderSectionImgGallery);
  const logoImg = useSelector(logoImgGallery);
  const imageButtons = useSelector(imageButtonGallery);
  // -Request Gallery
  const statusRequestGallery = useSelector(statusRequestImage);
  const messageRequest = useSelector(messageRequestImageFailure);
  // -Upload File
  const statusUpload = useSelector(statusUploadFile);
  const messageUpload = useSelector(messageUploadFileFailure);
  const pageId = useSelector(id);

  // Dispatch
  const getImage = thunkGetImageGallery();
  const chooseImage = thunkChooseImage();
  const chooseIcon = thunkChangeIconCard();
  const chooseIconCard2 = thunkChangeIconCard2();
  const chooseIconInCol = thunkChangeIconInCol();
  const chooseImgSlide = thunkChangeImgSlide();
  const chooseAvatarAuthor = thunkChangeAvatarAuthor();
  const chooseSliderImgSection = thunkChangeImgSlide2();
  const chooseLogoImg = thunkChangeLogoImg();
  const chooseImageButton = thunkChangeImageButton()
  const save = thunkSaveAll();
  const upload = thunkUploadFile();

  // Handle
  const handleChoose = (fieldName: string) => {
    const { type, nowIndexSection, nowIndexCard, nowIndexSlide, nowIndexRate, nowIndexButton } = param;
    return (result: any) => {
      // Result = {imgSrc: string}
      if (type === 'logoImg') {
        chooseLogoImg(result.imgSrc);
      }
      if (type === 'iconImg') {
        chooseIcon({ fieldName: fieldName, imgSrc: result, nowIndexSection: parseInt(nowIndexSection), nowIndexCard: parseInt(nowIndexCard) });
      }
      if (type === 'iconCard2') {
        chooseIconCard2({ iconImg: result, nowIndexCard: parseInt(nowIndexCard), nowIndexSection: parseInt(nowIndexSection) });
      }
      if (type === 'iconImgInCol') {
        chooseIconInCol({ iconImg: result.imgSrc, nowIndexSection: parseInt(nowIndexSection) });
      }
      if (type === 'avatarAuthor') {
        chooseAvatarAuthor({ avatar: result.imgSrc, nowIndexSection: parseInt(nowIndexSection), nowIndexRate: parseInt(nowIndexRate) });
      }
      if (type === 'sliderImgs') {
        if (!!nowIndexSlide) {
          chooseImgSlide({ data: result, nowIndexSection: parseInt(nowIndexSection), nowIndexSlide: parseInt(nowIndexSlide) });
        } else {
          chooseImage({ fieldName: fieldName, src: result, nowIndexSection: parseInt(nowIndexSection) });
        }
      }
      if (type === 'sliderSectionImg') {
        chooseSliderImgSection({ imgSrc: result.imgSrc, nowIndexSection: parseInt(nowIndexSection), nowIndexSlide: parseInt(nowIndexSlide) });
      }
      if (type === 'imageSectionCol') {
        chooseImage({ fieldName: fieldName, src: result, nowIndexSection: parseInt(nowIndexSection) });
      }
      if (type === 'imageButton') {
        chooseImageButton({ imgSrc: result.imgSrc, nowIndexButton: parseInt(nowIndexButton), nowIndexSection: parseInt(nowIndexSection) })
      }
    };
  };

  const handleUploadFile = (typeImage: 'icon' | 'iconCard2' | 'imgSrc' | 'imageSectionCol' | 'sliderImgs' | 'avatarAuthor' | 'sliderSectionImg' | 'logoImg' | 'imageButton') => {
    if (!!typeImage) {
      return (result: File[]) => {
        upload({ path: typeImage, files: result });
      };
    }
  };

  const handleSaveAll = () => {
    save();
    history.goBack();
  };

  useMount(() => {
    setParam(() => {
      const res = getQuery(history.location.search, ['type', 'nowIndexSection', 'nowIndexCard', 'nowIndexSlide', 'nowIndexRate', 'nowIndexButton', 'multiple']);
      if (!!res.type) {
        getImage(res.type as 'icon' | 'iconCard2' | 'imgSrc' | 'imageSectionCol' | 'sliderImgs' | 'avatarAuthor' | 'logoImg' | 'sliderSectionImg' | 'imageButton');
      }
      return {
        ...res
      };
    });
  });

  const _renderSwitch = () => {
    const { type, multiple } = param;
    if (!!type) {
      const listImg = type === 'iconImg' ? icon
        : type === 'iconCard2' ? iconCard2
          : type === 'sliderImgs' ? sliderImgs
            : type === 'avatarAuthor' ? avatarAuthor
              : type === 'iconImgInCol' ? iconImgInCol
                : type === 'sliderSectionImg' ? sliderSectionImg
                  : type === 'logoImg' ? logoImg
                    : type === 'imageButton' ? imageButtons
                      : imageSection;
      switch (statusRequestGallery) {
        case 'success':
          return <RollSelect
            fieldName={type}
            listImg={listImg}
            multiple={JSON.parse(multiple)}
            statusUploadFile={statusUpload}
            messageUpload={messageUpload}
            onChoose={handleChoose(type)}
            onUploadFile={handleUploadFile(type as 'icon' | 'imgSrc' | 'imageSectionCol' | 'sliderImgs')} />;
        case 'loading':
          return <RollSelect fieldName={type} statusLazy="loading" listImg={[]} ammountLazyLoading={10} />;
        case 'failure':
          return <Redirect to={{ pathname: '/error', state: messageRequest }} />;
        default:
          return null;
      }
    }
  };

  if (!pageId) {
    return <Redirect to={{ pathname: '/admin/list' }} />;
  }

  return (
    <div className="ImageGalleryPage" style={{ width: '100%', height: '100%', background: '#EEE' }}>
      {_renderSwitch()}
      <Button shape='circle' size='large' className={styles.goBackBtn} onClick={handleSaveAll}>
        <a href="####" onClick={e => e.preventDefault()}>
          <i className="fas fa-arrow-left"></i>
        </a>
      </Button>
    </div>
  );

};

export default ImageGalleryPage;
