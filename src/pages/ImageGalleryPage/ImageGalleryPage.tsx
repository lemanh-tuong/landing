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
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import getQuery from 'utils/functions/getQuery';
import styles from './ImageGalleryPage.module.scss';
import { avatarAuthorGallery, iconCard2Gallery, iconGallery, iconImgInColGallery, imageSectionCol, messageRequestImageFailure, messageUploadFileFailure, sliderImgsGallery, sliderSectionImgGallery, statusRequestImage, statusUploadFile } from './selectors';
import thunkChangeAvatarAuthor from './thunks/thunkChangeAvatarAuthor/thunkChangeAvatarAuthor';
import thunkChangeIconCard2 from './thunks/thunkChangeIconCard2/thunkChangeIconCard2';
import thunkChangeIconInCol from './thunks/thunkChangeIconInCol/thunkChangeIconInCol';

type GetQueryType = 'type' | 'nowIndexSection' | 'nowIndexCard' | 'nowIndexSlide' | 'nowIndexRate' | 'multiple';

const ImageGalleryPage = () => {
  const history = useHistory();
  // Selector

  // -Gallery
  const sliderImgs = useSelector(sliderImgsGallery);
  const icon = useSelector(iconGallery);
  const iconCard2 = useSelector(iconCard2Gallery);
  const imageSection = useSelector(imageSectionCol);
  const avatarAuthor = useSelector(avatarAuthorGallery);
  const iconImgInCol = useSelector(iconImgInColGallery);
  const sliderSectionImg = useSelector(sliderSectionImgGallery);

  // -Request Gallery
  const statusRequestGallery = useSelector(statusRequestImage);
  const messageRequest = useSelector(messageRequestImageFailure);
  // -Upload File
  const statusUpload = useSelector(statusUploadFile);
  const messageUpload = useSelector(messageUploadFileFailure);

  // Destructoring
  const { type, nowIndexSection, nowIndexCard, nowIndexSlide, nowIndexRate, multiple } = getQuery<GetQueryType>(history.location.search, ['type', 'nowIndexSection', 'nowIndexCard', 'nowIndexSlide', 'nowIndexRate', 'multiple']);

  // Dispatch
  const getImage = thunkGetImageGallery();
  const chooseImage = thunkChooseImage();
  const chooseIcon = thunkChangeIconCard();
  const chooseIconCard2 = thunkChangeIconCard2();
  const chooseIconInCol = thunkChangeIconInCol();
  const chooseImgSlide = thunkChangeImgSlide();
  const chooseAvatarAuthor = thunkChangeAvatarAuthor();
  const chooseSliderImgSection = thunkChangeImgSlide2();
  const save = thunkSaveAll();
  const upload = thunkUploadFile();

  // Handle
  const handleChoose = (fieldName: string) => {
    return (result: any) => {
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
      return (result: any) => {
        chooseImage({ fieldName: fieldName, src: result, nowIndexSection: parseInt(nowIndexSection) });
      };
    };
  };

  const handleUploadFile = (typeImage: 'icon' | 'iconCard2' | 'imgSrc' | 'imageSectionCol' | 'sliderImgs' | 'avatarAuthor' | 'sliderSectionImg') => {
    if (!!nowIndexSection) {
      return (result: File[]) => {
        upload({ path: typeImage, files: result });
      };
    }
  };
  const handleSaveAll = () => {
    save();
  };

  useMount(() => {
    if (!!type) {
      getImage(type as 'icon' | 'iconCard2' | 'imgSrc' | 'imageSectionCol' | 'sliderImgs' | 'avatarAuthor' | 'sliderSectionImg');
    }
  });

  const _renderSwitch = () => {
    if (!!type) {
      const listImg = type === 'iconImg' ? icon
        : type === 'iconCard2' ? iconCard2
          : type === 'sliderImgs' ? sliderImgs
            : type === 'avatarAuthor' ? avatarAuthor
              : type === 'iconImgInCol' ? iconImgInCol
                : type === 'sliderSectionImg' ? sliderSectionImg
                  : imageSection;
      console.log(listImg);
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
          return <div>{messageRequest}</div>;
        default:
          return null;
      }
    }
  };

  return (
    <>
      {_renderSwitch()}
      <Button shape='circle' size='large' className={styles.goBackBtn} onClick={handleSaveAll}>
        <Link to='/admin/builder'>
          <i className="fas fa-arrow-left"></i>
        </Link>
      </Button>
    </>
  );

};

export default ImageGalleryPage;
