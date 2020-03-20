import React, { memo, FC, useState } from 'react';
import Form from 'components/Form/Form';
import { CardProps } from 'components/Card/Card';
import { iconGallery, sections } from 'pages/SettingsPage/selectors';
import { useSelector } from 'react-redux';
import Button from 'components/Button/Button';
import styles from './FormChangeCard.module.scss';
import thunkChangeInputCardForm from 'pages/SettingsPage/thunks/thunkChangeInputCardForm/thunkChangeInputCardForm';
import thunkChangeRadioCardForm from 'pages/SettingsPage/thunks/thunkChangeRadioCardForm/thunkChangeRadioCardForm';
import thunkDeleteCard from 'pages/SettingsPage/thunks/thunkDeleteCard/thunkDeleteCard';
import thunkMoveChild from 'pages/SettingsPage/thunks/thunkMoveChild/thunkMoveChild';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { reorder } from 'pages/SettingsPage/reoderFunction';
import thunkChangeIconCard from 'pages/SettingsPage/thunks/thunkChangeIconCard/thunkChangeIconCard';
export type FormSection1Field<T> = T & {
  fieldType: 'input' | 'radio' | 'checkbox' | 'file';
  fieldName: string;
}

export interface FormChangeCardProps {
  nowIndexSection: number;
  // nowIndexCard: number;
}

const FormChangeCard: FC<FormChangeCardProps> = ({ nowIndexSection }) => {
  const [show, setShow] = useState('');

  // Selector
  const icons = useSelector(iconGallery);
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { sectionId, cards } = element;

  // Dispatch
  const changeInputCardForm = thunkChangeInputCardForm();
  const changeRadioCardForm = thunkChangeRadioCardForm();
  const changeIconCardForm = thunkChangeIconCard();
  const deleteCard = thunkDeleteCard();
  const moveChild = thunkMoveChild();

  // Handle
  const handleShow = (cardId: string) => {
    return () => {
      setShow(cardId);
    }
  }
  // const handleClose = () => {
  //   setShow('')
  // }

  const handleChangeCardForm = (nowIndexCard: number) => {
    return (fieldName: string) => {
      return (result: any) => {
        if (fieldName === 'card title' || fieldName === 'card text') {
          changeInputCardForm(fieldName, result, nowIndexSection, nowIndexCard);
        }
        if (fieldName === 'align card title' || fieldName === 'align card text') {
          changeRadioCardForm(fieldName, result, nowIndexSection, nowIndexCard);
        }
        if (fieldName === 'card icon') {
          changeIconCardForm('icon', result, nowIndexCard);
        }
      }
    }
  }
  const handleDelete = (nowIndexCard: number) => {
    return () => {
      deleteCard(nowIndexSection, nowIndexCard)
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
    moveChild(newElements, nowIndexSection);
  }
  const handleChangeIconCard = (nowIndexCard: number) => {
    return (result: string) => {
      changeIconCardForm(result, nowIndexSection, nowIndexCard)
    }
  }

  // Render
  const _renderSettingsBox = (nowIndexCard: number) => {
    return <Form
      fields={[
        {
          fieldType: 'input',
          fieldName: 'card title',
          horizontal: true,
          defaultValue: 'Card Text'
        },
        {
          fieldType: 'radio',
          fieldName: 'align card title',
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
        },
        {
          fieldType: 'color-picker',
          fieldName: 'color card title',
          defaultValue: '#000'
        },
        {
          fieldType: 'input',
          fieldName: 'card text',
          defaultValue: 'Card Text'
        },
        {
          fieldType: 'radio',
          fieldName: 'align card text',
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
          fieldName: 'color card text',
          defaultValue: '#000'
        },
        {
          fieldType: 'file',
          fieldName: 'card icon',
          listImg: icons ? [...icons] : [],
          width: 50,
          height: 50
        }
      ]}
      onChange={handleChangeCardForm(nowIndexCard)}
      onAnotherEvent={handleChangeIconCard(nowIndexCard)}
    />
  }

  const _renderLabel = (cardProperty: CardProps, nowIndexCard: number) => {
    const { titleCard } = cardProperty;

    return (
      <>
        <Draggable index={nowIndexCard} draggableId={`card-${nowIndexCard}`} key={uuidv4()}>
          {provided => (
            <div className={styles.cardFormName} onClick={handleShow(`card-${nowIndexCard}`)} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
              <div className={styles.cardDesc}>
                <i className="fas fa-plus"></i>
                <div className={styles.cardName}>{titleCard}</div>
              </div>
              <Button color='primary' className={styles.deleteBtn} onClick={handleDelete(nowIndexCard)}>
                Delete
              </Button>
            </div>
          )}
        </Draggable>
        {show === `card-${nowIndexCard}` ? _renderSettingsBox(nowIndexCard) : null}
      </>
    )
  }

  return (
    <DragDropContext onDragEnd={handleMove}>
      <Droppable droppableId={sectionId} type="card drop">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={styles.gallery} onMouseUp={handleMove}>
            {element.cards?.map((cardProperty, index) => _renderLabel(cardProperty, index))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default memo(FormChangeCard);
