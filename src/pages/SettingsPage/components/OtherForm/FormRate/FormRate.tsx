import { Button } from 'antd';
import authorAvatar from 'assets/img/web_icons/envato.svg';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import Icon from 'components/Icon/Icon';
import { RateProps } from 'components/Rate/Rate';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddRate from 'pages/SettingsPage/thunks/thunksRate/thunkAddRate/thunkAddRate';
import thunkChangeInputRateForm from 'pages/SettingsPage/thunks/thunksRate/thunkChangeInputRateForm/thunkChangeInputRateForm';
import thunkDeleteRate from 'pages/SettingsPage/thunks/thunksRate/thunkDeleteRate/thunkDeleteRate';
import thunkMoveRate from 'pages/SettingsPage/thunks/thunksRate/thunkMoveRate/thunkMoveRate';
import React, { FC, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormRate.module.scss';

export interface FormRateProps {
  nowIndexSection: number;
  nowIndexRate: number;
}

const rateDefault: RateProps = {
  authorAvatar: {
    imgSrc: authorAvatar,
    href: '##',
  },
  authorName: 'SergeyX',
  purpose: 'Feature availability',
  rateContent: 'Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.',
  stars: 5,
};

type FormRateState = Partial<RateProps> & {
  nowIndexRate: number;
};

const FormRate: FC<FormRateProps> = ({ nowIndexSection, nowIndexRate }) => {
  const [formShown, setFormShown] = useState<FormRateState>({ nowIndexRate: nowIndexRate });

  const handleFormShown = (rateProperty: RateProps, nowIndexRate: number) => {
    return () => {
      if (formShown.nowIndexRate !== nowIndexRate) {
        setFormShown({ ...rateProperty, nowIndexRate: nowIndexRate });
      } else {
        setFormShown({ nowIndexRate: -1 });
      }
    };
  };

  const handleCloseAll = () => {
    setFormShown({ nowIndexRate: -1 })
  }

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { sectionId, rateList } = element;

  //Dispatch
  const addRate = thunkAddRate();
  const deleteRate = thunkDeleteRate();
  const changeInput = thunkChangeInputRateForm();
  const moveRate = thunkMoveRate();
  // Handle
  const handleAdd = () => {
    addRate({ nowIndexRate: rateList?.length ?? 0, nowIndexSection: nowIndexSection, rateProperty: rateDefault });
  };

  const handleDelete = (nowIndexRate: number) => {
    return () => {
      deleteRate({ nowIndexSection: nowIndexSection, nowIndexRate: nowIndexRate });
      if (formShown.nowIndexRate === nowIndexRate) {
        setFormShown({ nowIndexRate: -1 });
      }
    };
  };

  const handleChangeForm = (nowIndexRate: number) => ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input' || fieldType === 'number') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexRate: nowIndexRate });
      }
    };
  };

  const handleMoveRate = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newElements = rateList ? reorder(
      rateList,
      result.source.index,
      result.destination.index
    ) : [];
    moveRate({ data: newElements, nowIndexSection: nowIndexSection });
  };

  const _renderLabel = (rateProperty: RateProps, nowIndexRate: number) => {
    const { rateContent } = rateProperty;
    return (
      <Draggable index={nowIndexRate} draggableId={`rate-${nowIndexRate}`} key={`rate-${rateContent}-${nowIndexRate}`}>
        {provided => (
          <div className={`${styles.rateFormItem}`} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={`${styles.rateFormName} ${nowIndexRate === formShown.nowIndexRate ? styles.active : ''}`}>
              <div className={styles.rateDesc} onClick={handleFormShown(rateProperty, nowIndexRate)} >
                <i className="fas fa-plus"></i>
                <div className={styles.rateName}>{rateContent}</div>
              </div>
              <Button shape='round' size='large' onClick={handleDelete(nowIndexRate)} >
                Delete
            </Button>
            </div>
            {nowIndexRate === formShown.nowIndexRate && _renderSettingsBox(nowIndexRate)}
          </div>
        )}
      </Draggable>
    );
  };

  const _renderSettingsBox = (nowIndexRate: number) => {
    const { authorAvatar, rateContent, authorName, purpose, stars } = rateList?.[nowIndexRate] as RateProps;
    return (
      <Form
        fields={[
          {
            fieldId: `rate-rateContent-${sectionId}-${nowIndexRate}`,
            fieldType: 'input',
            fieldName: 'rateContent',
            defaultValue: rateContent,
          },
          {
            fieldId: `rate-authorName-${sectionId}-${nowIndexRate}`,
            fieldType: 'input',
            fieldName: 'authorName',
            defaultValue: authorName,
          },
          {
            fieldId: `rate-purpose-${sectionId}-${nowIndexRate}`,
            fieldType: 'input',
            fieldName: 'purpose',
            defaultValue: purpose,
          },
          {
            fieldId: `rate-stars-${sectionId}-${nowIndexRate}`,
            fieldType: 'number',
            fieldName: 'stars',
            defaultNumber: stars,
          }
        ]}
        onChange={handleChangeForm(formShown.nowIndexRate)}
      >
        <Link className={styles.link} to={`/gallery?type=avatarAuthor&nowIndexSection=${nowIndexSection}&nowIndexRate=${nowIndexRate}&multiple=false`}>
          <Icon iconImg={authorAvatar} bgColorIcon={'gradient-pink-orange'} />
          <i className={`far fa-images ${styles.icon}`}></i>
        </Link>
      </Form>
    );
  };

  return (
    <div className={styles.editRateComponent}>
      <DragDropContext onDragEnd={handleMoveRate} onDragStart={handleCloseAll}>
        <Droppable droppableId={sectionId} type="rate drop">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner} >
              <div className={styles.listRate}>
                {rateList?.map((rateProperty: RateProps, index: number) => _renderLabel(rateProperty, index))}
                <Button onClick={handleAdd} shape='circle' size='large' style={{ marginTop: 10 }}>
                  <i className="fas fa-plus" />
                </Button>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default FormRate;
