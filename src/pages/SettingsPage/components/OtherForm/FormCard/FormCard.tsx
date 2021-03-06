import { Button, Select } from 'antd';
import 'antd/es/style/css';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { CardProps } from 'components/Card/Card';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import Icon from 'components/Icon/Icon';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddCard from 'pages/SettingsPage/thunks/thunksCard/thunkAddCard/thunkAddCard';
import thunkChangeColorTextCard from 'pages/SettingsPage/thunks/thunksCard/thunkChangeColorTextCard/thunkChangeColorTextCard';
import thunkChangeInputCardForm from 'pages/SettingsPage/thunks/thunksCard/thunkChangeInputCardForm/thunkChangeInputCardForm';
import thunkChangeRadioCardForm from 'pages/SettingsPage/thunks/thunksCard/thunkChangeRadioCardForm/thunkChangeRadioCardForm';
import thunkDeleteCard from 'pages/SettingsPage/thunks/thunksCard/thunkDeleteCard/thunkDeleteCard';
import thunkMoveCard from 'pages/SettingsPage/thunks/thunksCard/thunkMoveCard/thunkMoveCard';
import React, { FC, memo, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormCard.module.scss';

export type FormChangeCardField = FieldType;

export interface FormChangeCardProps {
  nowIndexSection: number;
  indexCard: number;
}

const cardDefault: CardProps = {
  titleCard: 'Paid listings',
  textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.',
  iconImg: { imgSrc: icon1 },
  hasIcon: true, bgColorIcon: 'gradient-pink-orange'
};

const FormChangeCard: FC<FormChangeCardProps> = ({ nowIndexSection, indexCard }) => {
  const [formShown, setFormShown] = useState<{ nowIndexCard: number }>({ nowIndexCard: indexCard });

  const handleFormShown = (cardProperty: CardProps, nowIndexCard: number) => {
    return () => {
      if (formShown.nowIndexCard !== nowIndexCard) {
        setFormShown({ ...cardProperty, nowIndexCard: nowIndexCard });
      } else {
        setFormShown({ nowIndexCard: -1 });
      }
    };
  };
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { sectionId, cards } = element;

  // Dispatch
  const changeInputCardForm = thunkChangeInputCardForm();
  const changeRadioCardForm = thunkChangeRadioCardForm();
  const changeColorTextCard = thunkChangeColorTextCard();
  const addCard = thunkAddCard();
  const deleteCard = thunkDeleteCard();
  const moveChild = thunkMoveCard();

  // Handle
  const handleChangeCardForm = (nowIndexCard: number) => {
    return ({ fieldName, fieldType }: OnChangeFuncArg) => {
      return (result: any) => {
        if (fieldType === 'input') {
          // Value of input
          changeInputCardForm({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard });
        }
        if (fieldType === 'radio') {
          // Result = value radio checking
          changeRadioCardForm({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard });
        }
        if (fieldType === 'color-picker') {
          // Result = {hex: string, rgba: string}
          changeColorTextCard({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard });
        }
      };
    };
  };
  const handleAdd = () => {
    addCard({ data: cardDefault, nowIndexSection: nowIndexSection });
  };
  const handleDelete = (nowIndexCard: number) => {
    return () => {
      deleteCard({ indexSection: nowIndexSection, indexCard: nowIndexCard });
      if (formShown.nowIndexCard === nowIndexCard) {
        setFormShown({ nowIndexCard: -1 });
      }
    };
  };
  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newElements = cards ? reorder(
      cards,
      result.source.index,
      result.destination.index
    ) : [];
    moveChild({ data: newElements, nowIndexSection: nowIndexSection });
  };

  const handleChangeBgIcon = (nowIndexCard: number) => {
    return (result: string) => changeInputCardForm({ fieldName: 'bgColorIcon', nowIndexCard: nowIndexCard, nowIndexSection: nowIndexSection, value: result });
  };

  // Render
  const _renderSettingsBox = (nowIndexCard: number) => {
    const { textCard, titleCard, colorText, colorTitleCard, alignTitleCard, alignText, iconImg, alignIcon, bgColorIcon } = element.cards?.[nowIndexCard] as CardProps;
    return (
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'titleCard',
            fieldId: 'change-card-field-1',
            horizontal: true,
            defaultValue: titleCard,
          },
          {
            fieldType: 'radio',
            fieldName: 'alignTitleCard',
            fieldId: 'change-card-field-2',
            data: [
              {
                value: 'center',
                name: 'align card title'
              },
              {
                value: 'left',
                name: 'align card title'
              },
              {
                value: 'right',
                name: 'align card title'
              },
            ],
            defaultCheckedValue: alignTitleCard
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorTitleCard',
            fieldId: 'change-card-field-3',
            defaultColor: colorTitleCard
          },
          {
            fieldType: 'input',
            fieldName: 'textCard',
            fieldId: 'change-card-field-4',
            defaultValue: textCard
          },
          {
            fieldType: 'radio',
            fieldName: 'alignText',
            fieldId: 'change-card-field-5',
            defaultCheckedValue: alignText,
            data: [
              {
                value: 'center',
                name: 'align card text'
              },
              {
                value: 'left',
                name: 'align card text'
              },
              {
                value: 'right',
                name: 'align card text'
              },
            ],
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorText',
            fieldId: 'change-card-field-6',
            defaultColor: colorText,
          },
          {
            fieldType: 'radio',
            fieldName: 'alignIcon',
            fieldId: 'align-icon-card',
            defaultCheckedValue: alignIcon,
            data: [
              {
                name: 'align icon card2',
                value: 'left'
              },
              {
                name: 'align icon card2',
                value: 'right'
              },
              {
                name: 'align icon card2',
                value: 'center'
              },
            ]
          },
        ]}
        onChange={handleChangeCardForm(nowIndexCard)}
      >
        <div className="bgIcon">
          <p>Background Icon</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            onChange={handleChangeBgIcon(nowIndexCard)}
          >
            <Select.Option value="transparent">Transparent</Select.Option>
            <Select.Option value="gradient-pink-orange">Gradient</Select.Option>
          </Select>,
        </div>
        <Link className={styles.link} to={`/gallery?type=iconImg&nowIndexSection=${nowIndexSection}&nowIndexCard=${nowIndexCard}&multiple=false`}>
          <Icon iconImg={iconImg} bgColorIcon={bgColorIcon} />
          <i className={`far fa-images ${styles.icon}`}></i>
        </Link>
      </Form>
    );
  };

  const _renderLabel = (cardProperty: CardProps, nowIndexCard: number) => {
    const { titleCard } = cardProperty;

    return (
      <Draggable index={nowIndexCard} draggableId={`card-${nowIndexCard}`}>
        {provided => (
          <div className={`${styles.cardFormName} ${nowIndexCard === formShown.nowIndexCard ? styles.active : null}`} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={styles.cardDesc} onClick={handleFormShown(cardProperty, nowIndexCard)} >
              <i className="fas fa-plus"></i>
              <div className={styles.cardName}>{titleCard}</div>
            </div>
            <Button shape='round' size='large' onClick={handleDelete(nowIndexCard)} >
              Delete
              </Button>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <div className={styles.editCardComponent}>
      <DragDropContext onDragEnd={handleMove}>
        <Droppable droppableId={sectionId} type="card drop">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner}>
              <div className={styles.listCard}>
                {element.cards?.map((cardProperty: CardProps, index: number) => _renderLabel(cardProperty, index))}
                <Button onClick={handleAdd} shape='circle' size='large' style={{ marginTop: 10 }}>
                  <i className="fas fa-plus" />
                </Button>
              </div>
              <div className={styles.form}>
                {element.cards?.map((_cardProperty: any, index: number) => formShown.nowIndexCard === index ? _renderSettingsBox(index) : null)}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default memo(FormChangeCard);
