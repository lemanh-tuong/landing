import { Button } from 'antd';
import 'antd/es/style/css';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { CardProps } from 'components/Card/Card';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import ToggableComponent from 'components/ToggableComponent/ToggableComponent';
import { reorder } from 'pages/SettingsPage/reoderFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddCard from 'pages/SettingsPage/thunks/thunkAddCard/thunkAddCard';
import thunkChangeColorTextCard from 'pages/SettingsPage/thunks/thunkChangeColorTextCard/thunkChangeColorTextCard';
import thunkChangeInputCardForm from 'pages/SettingsPage/thunks/thunkChangeInputCardForm/thunkChangeInputCardForm';
import thunkChangeRadioCardForm from 'pages/SettingsPage/thunks/thunkChangeRadioCardForm/thunkChangeRadioCardForm';
import thunkDeleteCard from 'pages/SettingsPage/thunks/thunkDeleteCard/thunkDeleteCard';
import thunkMoveChild from 'pages/SettingsPage/thunks/thunkMoveChild/thunkMoveChild';
import React, { FC, memo } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormChangeCard.module.scss';

export type FormChangeCardField = FieldType;

export interface FormChangeCardProps {
  nowIndexSection: number;
}

const cardDefault: CardProps = {
  titleCard: 'Paid listings',
  textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.',
  iconImg: { imgSrc: icon1 },
  hasIcon: true, bgColorIcon: 'gradient-pink-orange'
}

const FormChangeCard: FC<FormChangeCardProps> = ({ nowIndexSection }) => {
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
  const moveChild = thunkMoveChild();

  // Handle
  const handleChangeCardForm = (nowIndexCard: number) => {
    return ({ fieldName, fieldType }: OnChangeFuncArg) => {
      return (result: any) => {
        if (fieldType === 'input') {
          changeInputCardForm({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard });
        }
        if (fieldType === 'radio') {
          changeRadioCardForm({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard });
        }
        if (fieldType === 'color-picker') {
          changeColorTextCard({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard });
        }
      }
    }
  }
  const handleAdd = () => {
    addCard({ data: cardDefault, nowIndexSection: nowIndexSection })
  }
  const handleDelete = (nowIndexCard: number) => {
    return () => {
      deleteCard({ indexSection: nowIndexSection, indexCard: nowIndexCard })
    }
  }
  const handleMove = (result: any) => {
    if (!result.destination) {
      return;
    }
    const newElements = cards ? reorder(
      cards,
      result.source.index,
      result.destination.index
    ) : [];
    moveChild({ data: newElements, nowIndexSection: nowIndexSection });
  }

  // Render
  const _renderSettingsBox = (nowIndexCard: number) => {
    const { textCard, titleCard, colorText, colorTitleCard, alignTitleCard, alignText } = element.cards?.[nowIndexCard] as CardProps;
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
            defaultValue: colorTitleCard || '#000'
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
            defaultValue: colorText || '#000',
          }
        ]}
        onChange={handleChangeCardForm(nowIndexCard)}
      >
        <Button shape='round' size='large' style={{ margin: "10px 0" }}>
          <Link to={`/gallery?type=iconImg&nowIndexSection=${nowIndexSection}&nowIndexCard=${nowIndexCard}&multiple=false`}>
            Change Icon Card
            </Link>
        </Button>
      </Form>
    )
  }

  const _renderLabel = (cardProperty: CardProps, nowIndexCard: number) => {
    const { titleCard } = cardProperty;

    return (
      <Draggable index={nowIndexCard} draggableId={`card-${nowIndexCard}`}>
        {provided => (
          <div className={styles.cardFormName} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={styles.cardDesc}>
              <i className="fas fa-plus"></i>
              <div className={styles.cardName}>{titleCard}</div>
            </div>
            <Button shape='round' size='large' onClick={handleDelete(nowIndexCard)} >
              Delete
              </Button>
          </div>
        )}
      </Draggable>
    )
  }

  const _render = (cardProperty: CardProps, nowIndexCard: number) => {
    return <ToggableComponent renderContent={_renderLabel(cardProperty, nowIndexCard)} renderHideContent={_renderSettingsBox(nowIndexCard)} />
  }

  return (
    <>
      <DragDropContext onDragEnd={handleMove}>
        <Droppable droppableId={sectionId} type="card drop">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.gallery} onMouseUp={handleMove}>
              {element.cards?.map((cardProperty, index) => _render(cardProperty, index))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button onClick={handleAdd} shape='circle' size='large' style={{ marginTop: 10 }}>
        <i className="fas fa-plus" />
      </Button>
    </>
  )
}

export default memo(FormChangeCard);
