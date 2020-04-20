import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { CardProps } from 'components/Card/Card';
import PopUp from 'components/PopUp/PopUp';
import thunkAddCard from 'pages/SettingsPage/thunks/thunkAddCard/thunkAddCard';
import thunkDeleteCard from 'pages/SettingsPage/thunks/thunkDeleteCard/thunkDeleteCard';
import React, { FC } from 'react';
import FormCard from '../OtherForm/FormCard/FormCard';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import Section2, { Section2Props } from './Section2';
import styles from './Section2Editable.module.scss';
export interface Section2EditableProps extends Section2Props {
  nowIndexSection: number
};

const cardDefault: CardProps = {
  titleCard: 'Paid listings',
  textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.',
  iconImg: { imgSrc: icon1 },
  hasIcon: true, bgColorIcon: 'gradient-pink-orange'
}
const Section2Editable: FC<Section2EditableProps> = ({
  nowIndexSection, sectionId,
  mainTitle, alignMainTitle, colorMainTitle,
  cards, backgroundImage }) => {
  //Dispatch
  const addCard = thunkAddCard();
  const deleteCard = thunkDeleteCard();

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  }
  const handleShowPopupEditCard = () => {
    PopUp.show(`card-${sectionId}`)();
  }
  const handleAdd = (nowIndexCard: number) => {
    addCard({ data: cardDefault, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard })
  }
  const handleDeleteCard = (nowIndexCard: number) => {
    deleteCard({ indexSection: nowIndexSection, indexCard: nowIndexCard })
  }

  return (
    <div className={styles.Section2Editable}>
      <Section2
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        backgroundImage={backgroundImage?.[0]}
        // backgroundColor={backgroundColor}
        cards={cards ? cards : []}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditCard={handleShowPopupEditCard}
        onAddCard={handleAdd}
        onDeleteCard={handleDeleteCard}
      />
      <PopUp id={`mainTitle-${sectionId}`} >
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`card-${sectionId}`} >
        <FormCard nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  )
}

export default Section2Editable;
