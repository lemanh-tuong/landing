import 'antd/es/style/css';
import { CardProps } from 'components/Card/Card';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import FormDropDown from 'components/FormDropDown/FormDropDown';
import Icon from 'components/Icon/Icon';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColorTextCard2 from 'pages/SettingsPage/thunks/thunksCard2/thunkChangeColorTextCard2/thunkChangeColorTextCard2';
import thunkChangeInputCard2Form from 'pages/SettingsPage/thunks/thunksCard2/thunkChangeInputCard2Form/thunkChangeInputCard2Form';
import thunkChangeRadioCard2Form from 'pages/SettingsPage/thunks/thunksCard2/thunkChangeRadioCard2Form/thunkChangeRadioCard2Form';
import thunkMoveCard2 from 'pages/SettingsPage/thunks/thunksCard2/thunkMoveCard2/thunkMoveCard2';
import React, { FC, memo } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormCard2.module.scss';

export type FormChangeCardField = FieldType;

export interface FormChangeCardProps {
  nowIndexSection: number;
  indexCard: number;
}

const FormChangeCard: FC<FormChangeCardProps> = ({ nowIndexSection, indexCard }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { card2s } = element;

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
    const { textCard, titleCard, colorText, colorTitleCard, alignTitleCard, alignText, iconImg, alignIcon } = element.card2s?.[nowIndexCard] as CardProps;
    return (
      <Form
        style={{ border: '1px solid', borderRadius: 5 }}
        fields={[
          {
            fieldType: 'input',
            fieldName: 'titleCard',
            label: 'Title Card',
            fieldId: 'change-card-field-1',
            horizontal: true,
            defaultValue: titleCard,
          },
          {
            fieldType: 'radio',
            fieldName: 'alignTitleCard',
            label: 'Align Title Card',
            fieldId: 'change-card-field-2',
            data: [
              {
                value: 'left',
                name: 'align card title'
              },
              {
                value: 'center',
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
            label: 'Color Title Card',
            fieldId: 'change-card-field-3',
            defaultColor: colorTitleCard
          },
          {
            fieldType: 'input',
            fieldName: 'textCard',
            label: 'Text Card',
            fieldId: 'change-card-field-4',
            defaultValue: textCard
          },
          {
            fieldType: 'radio',
            fieldName: 'alignText',
            label: 'Align Text',
            fieldId: 'change-card-field-5',
            defaultCheckedValue: alignText,
            data: [
              {
                value: 'left',
                name: 'align card text'
              },
              {
                value: 'center',
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
            label: 'Color Text',
            fieldId: 'change-card-field-6',
            defaultColor: colorText,
          },
          {
            fieldType: 'radio',
            fieldName: 'alignIcon',
            label: 'Align Icon',
            fieldId: 'align-icon-card',
            defaultCheckedValue: alignIcon,
            data: [
              {
                name: 'align icon card2',
                value: 'left'
              },
              {
                name: 'align icon card2',
                value: 'center'
              },
              {
                name: 'align icon card2',
                value: 'right'
              },
            ]
          },
        ]}
        onChange={handleChangeCardForm(nowIndexCard)}
      >
        <Link className={styles.link} to={`/admin/gallery?type=iconCard2&nowIndexSection=${nowIndexSection}&nowIndexCard=${nowIndexCard}&multiple=false`}>
          <Icon iconImg={iconImg} bgColorIcon={'transparent'} />
          <i className={`far fa-images ${styles.icon}`}></i>
        </Link>
      </Form>
    );
  };

  return (
    <div className={styles.formCard2}>
      <FormDropDown
        draggableId='card-2'
        droppableId='card-2'
        label={card2s?.map(item => item.titleCard) as string[]}
        onAdd={() => { }}
        onDelete={(index: number) => () => { }}
        onMoveEnd={handleMove}
        renderForm={_renderSettingsBox}
        defaultFormShown={indexCard}
        styleDeleteIcon={{ display: "none" }}
      />
    </div>
  );
};

export default memo(FormChangeCard);
