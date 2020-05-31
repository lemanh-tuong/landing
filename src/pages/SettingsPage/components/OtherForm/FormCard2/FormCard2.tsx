import 'antd/es/style/css';
import { CardProps } from 'components/Card/Card';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import Icon from 'components/Icon/Icon';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColorTextCard2 from 'pages/SettingsPage/thunks/thunksCard2/thunkChangeColorTextCard2/thunkChangeColorTextCard2';
import thunkChangeInputCard2Form from 'pages/SettingsPage/thunks/thunksCard2/thunkChangeInputCard2Form/thunkChangeInputCard2Form';
import thunkChangeRadioCard2Form from 'pages/SettingsPage/thunks/thunksCard2/thunkChangeRadioCard2Form/thunkChangeRadioCard2Form';
import thunkMoveCard2 from 'pages/SettingsPage/thunks/thunksCard2/thunkMoveCard2/thunkMoveCard2';
import React, { FC, memo, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormCard2.module.scss';

export type FormChangeCardField = FieldType;

export interface FormChangeCardProps {
  nowIndexSection: number;
  indexCard: number;
}

const FormChangeCard: FC<FormChangeCardProps> = ({ nowIndexSection, indexCard }) => {
  const [formShown, setFormShown] = useState<CardProps & { nowIndexCard: number }>({ nowIndexCard: indexCard });

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
  const { sectionId, card2s } = element;

  // Dispatch
  const changeInputCardForm = thunkChangeInputCard2Form();
  const changeRadioCardForm = thunkChangeRadioCard2Form();
  const changeColorTextCard = thunkChangeColorTextCard2();
  const moveChild = thunkMoveCard2();

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

  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newElements = card2s ? reorder(
      card2s,
      result.source.index,
      result.destination.index
    ) : [];
    moveChild({ data: newElements, nowIndexSection: nowIndexSection });
  };

  // Render
  const _renderSettingsBox = (nowIndexCard: number) => {
    const { textCard, titleCard, colorText, colorTitleCard, alignTitleCard, alignText, iconImg, alignIcon } = card2s?.[nowIndexCard] as CardProps;
    return (
      <Form
        style={{ borderRadius: 5, border: '1px solid' }}
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
            defaultValue: colorTitleCard ?? '#000'
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
            defaultValue: colorText ?? '#000',
          },
          {
            fieldId: 'align-card2-icon',
            fieldName: 'alignIcon',
            fieldType: 'radio',
            defaultCheckedValue: alignIcon,
            data: [
              {
                name: 'align icon card',
                value: 'left'
              },
              {
                name: 'align icon card',
                value: 'right'
              },
              {
                name: 'align icon card',
                value: 'center'
              },
            ]
          }
        ]}
        onChange={handleChangeCardForm(nowIndexCard)}
      >
        <Link className={styles.link} to={`/gallery?type=iconCard2&nowIndexSection=${nowIndexSection}&nowIndexCard=${nowIndexCard}&multiple=false`}>
          <Icon iconImg={iconImg} bgColorIcon={'transparent'} />
          <i className={`far fa-images ${styles.icon}`}></i>
        </Link>
      </Form>
    );
  };

  const _renderLabel = (cardProperty: CardProps, nowIndexCard: number) => {
    const { titleCard } = cardProperty;
    return (
      <Draggable index={nowIndexCard} draggableId={`card2-${nowIndexCard}`}>
        {provided => (
          <div className={styles.formCard2Item} key={`card2-${titleCard}-${nowIndexCard}`} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={`${styles.cardFormName} ${nowIndexCard === formShown.nowIndexCard ? styles.active : ''}`} >
              <div className={styles.cardDesc} onClick={handleFormShown(cardProperty, nowIndexCard)} >
                <i className="fas fa-plus"></i>
                <div className={styles.cardName}>{titleCard}</div>
              </div>
            </div>
            {nowIndexCard === formShown.nowIndexCard && _renderSettingsBox(nowIndexCard)}
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
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner} >
              <div className={styles.listCard}>
                {card2s?.map((cardProperty: CardProps, index: number) => _renderLabel(cardProperty, index))}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default memo(FormChangeCard);
