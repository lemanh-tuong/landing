import { Button } from 'antd';
import { FormProps } from 'components/Form/Form';
import React, { CSSProperties, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import styles from './FormDropDown.module.scss';

export interface FormDropDownProps<T> extends Omit<FormProps, 'onChange' | 'fields' | 'onAnotherEvent'> {
  onDelete: (indexDelete: number) => () => void;
  onAdd: () => void;
  onMoveEnd: (result: DropResult) => void;
  droppableId: string;
  draggableId: string;
  label: T[];
  renderForm: (indexFormShown: number) => JSX.Element;
  defaultFormShown?: number;
  renderLabel?: (arg: T, index?: number) => JSX.Element;
  renderDeleteIcon?: () => JSX.Element;
  renderAddIcon?: () => JSX.Element;
  styleDeleteIcon?: CSSProperties;
  styleAddIcon?: CSSProperties;
}

const FormDropDown = <T extends any>({
  droppableId, onAdd, onDelete, onMoveEnd, label, draggableId,
  defaultFormShown, styleAddIcon, styleDeleteIcon,
  children, style, className, renderForm, renderLabel, renderAddIcon, renderDeleteIcon
}: FormDropDownProps<T>) => {
  const [formShown, setFormShown] = useState(typeof defaultFormShown === 'number' ? defaultFormShown : -1);

  const handleFormShown = (nowIndexCard: number) => {
    return () => {
      if (formShown !== nowIndexCard) {
        setFormShown(nowIndexCard);
      } else {
        setFormShown(-1);
      }
    };
  };

  const handleCloseAll = () => {
    setFormShown(-1);
  }

  const handleDelete = (nowIndexCard: number) => {
    return () => {
      onDelete(nowIndexCard)();
      if (nowIndexCard === formShown) {
        setFormShown(-1);
      }
    };
  };

  const _renderLabel = (label: T, index: number) => {
    return (
      <Draggable index={index} draggableId={`${draggableId}-${index}`} key={`${draggableId}-${index}`}>
        {provided => (
          <div className={styles.cardFormItem} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={`${styles.cardFormName} ${index === formShown ? styles.active : null}`}>
              <div className={styles.cardDesc} onClick={handleFormShown(index)} >
                <div className={styles.cardName}>{renderLabel ? renderLabel(label, index) : label}</div>
              </div>
              <Button shape='circle' type='default' style={styleDeleteIcon} size='large' onClick={handleDelete(index)} >
                {renderDeleteIcon ? renderDeleteIcon() : <i className="fas fa-trash" />}
              </Button>
            </div>
            {index === formShown && renderForm(formShown)}
          </div>
        )}
      </Draggable>
    )
  }


  return (
    <div className={styles.editCardComponent}>
      <DragDropContext onDragEnd={onMoveEnd} onBeforeCapture={handleCloseAll}>
        <Droppable droppableId={droppableId}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner}>
              <div className={styles.listCard}>
                {label.map((item: T, index: number) => _renderLabel(item, index))}
                <Button onClick={onAdd} shape='circle' size='large' style={{ marginTop: 10, ...styleAddIcon }}>
                  {renderAddIcon ? renderAddIcon() : <i className="fas fa-plus" />}
                </Button>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default FormDropDown;
