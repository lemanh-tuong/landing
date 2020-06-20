import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import FormDropDown from 'components/FormDropDown/FormDropDown';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkAddSlide from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkAddSlide/thunkAddSlide';
import thunkDeleteSlide from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkDeleteSlide/thunkDeleteSlide';
import thunkMoveSlide from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkMoveSlide/thunkMoveSlide';
import thunkResponsiveSlides from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkResponsiveSlides/thunkResponsiveSlides';
import React, { FC, memo, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import FormSlide, { defaultSlide } from '../FormSlide/FormSlide';
import styles from './FormSlides.module.scss';

export type FormSlides = FieldType;

export interface FormSlidesProps {
  nowIndexSection: number;
  hasNavField: boolean;
  hasDotField: boolean;
  hasMarginField: boolean;
  hasItemShowField: boolean;
  hasFluidField: boolean;
  responsiveField: boolean;
  draggableField: boolean;
}

export const FormSlides: FC<FormSlidesProps> = ({
  nowIndexSection,
  hasNavField,
  hasDotField,
  hasFluidField,
  hasItemShowField,
  hasMarginField,
  responsiveField,
  draggableField,
}) => {
  const [canResponsive, setCanResponsive] = useState(false);
  const _handleChangeCanResponsive = (result: boolean) => {
    setCanResponsive(result);
  };

  // Selector
  const element = useSelector(sections)[nowIndexSection];
  // Dispatch
  const changeInput = thunkChangeInput();
  const changeCheckBox = thunkChangeCheckBox();
  const responsiveSlides = thunkResponsiveSlides();
  const deleteSlide = thunkDeleteSlide();
  const addSlide = thunkAddSlide();
  const moveSlide = thunkMoveSlide();
  //Destructoring
  const { sliderImgs, responsive, hasNav, navClass, hasDots, dotClass, fluid, itemShow, margin, draggable } = element;

  const handleChangeFormGeneral = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input-text-2' || 'number') {
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'checkbox' && fieldName === 'canResponsive') {
        _handleChangeCanResponsive(result);
      }
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection });
      }
    };
  };
  const handleResponsiveSlides = ({ fieldName }: OnChangeFuncArg) => {
    return (result: any) => {
      responsiveSlides({ value: result, nowIndexSection: nowIndexSection, minWidth: fieldName });
    };
  };

  const handleDelete = (nowIndexSlide: number) => {
    return () => deleteSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  const handleAddSlide = () => {
    addSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: sliderImgs?.length || 0, sliderProperty: defaultSlide });
  };

  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newData = reorder(sliderImgs || [], result.source.index, result.destination.index);
    moveSlide({ nowIndexSection: nowIndexSection, sliderImgs: newData });
  };

  // Render
  const _renderSettingsBox = (index: number) => {
    return <FormSlide key={`slide-${index}`} nowIndexSection={nowIndexSection} nowIndexSlide={index} />;
  };

  const _renderGeneralSettings = () => {
    return (
      <>
        <h3>Form General Settings Slide</h3>
        <Form
          fields={[
            {
              fieldId: 1,
              fieldName: 'hasNav',
              label: 'Has Nav',
              fieldType: 'checkbox',
              defaultChecked: hasNav,
              hidden: !hasNavField,
            },
            {
              fieldId: 2,
              fieldName: 'navClass',
              label: 'Nav Class',
              fieldType: 'input-text-2',
              defaultValue: navClass,
              hidden: !hasNav,
            },
            {
              fieldId: 3,
              fieldName: 'hasDots',
              label: 'Has Dots',
              fieldType: 'checkbox',
              defaultChecked: hasDots,
              hidden: !hasDotField,
            },
            {
              fieldId: 4,
              fieldName: 'dotClass',
              label: 'Dot Class',
              fieldType: 'input-text-2',
              defaultValue: dotClass,
              hidden: !hasDots,
            },
            {
              fieldId: 5,
              fieldType: 'checkbox',
              label: 'Fluid',
              fieldName: 'fluid',
              defaultChecked: fluid,
              hidden: !hasFluidField,
            },
            {
              fieldId: 'draggable-slides',
              fieldType: 'checkbox',
              fieldName: 'draggable',
              label: 'Draggable',
              defaultChecked: !!draggable,
              hidden: !draggableField,
            },
            {
              fieldId: 6,
              fieldType: 'number',
              defaultNumber: itemShow,
              label: 'Ammount Item Show',
              fieldName: 'itemShow',
              min: 1,
              max: 4,
              hidden: !hasItemShowField,
            },
            {
              fieldId: 7,
              fieldType: 'number',
              fieldName: 'margin',
              label: 'Margin',
              defaultNumber: margin,
              min: 10,
              max: 50,
              hidden: !hasMarginField,
            },
            {
              fieldId: 8,
              fieldName: 'delayTime',
              label: 'Time Delay',
              fieldType: 'number',
              min: 1000,
              step: 100,
              defaultValue: '1000',
            },
            {
              fieldId: 9,
              fieldName: 'canResponsive',
              label: 'Can Responsive',
              fieldType: 'checkbox',
              defaultChecked: canResponsive,
              hidden: !responsiveField,
            },
          ]}
          onChange={handleChangeFormGeneral}
        >
          {canResponsive ? (
            <>
              <h1>Responsive</h1>
              <Form
                style={{ padding: 0 }}
                fields={[
                  {
                    fieldId: '576px',
                    fieldName: '576px',
                    label: '576px',
                    fieldType: 'number',
                    defaultNumber: responsive?.['576px'] ?? 0,
                  },
                  {
                    fieldId: '768px',
                    fieldName: '768px',
                    label: '768px',
                    fieldType: 'number',
                    defaultNumber: responsive?.['768px'] ?? 0,
                  },
                  {
                    fieldId: '992px',
                    fieldName: '992px',
                    label: '992px',
                    fieldType: 'number',
                    defaultNumber: responsive?.['992px'] ?? 0,
                  },
                  {
                    fieldId: '1200px',
                    fieldName: '1200px',
                    label: '1200px',
                    fieldType: 'number',
                    defaultNumber: responsive?.['1200px'] ?? 0,
                  },
                ]}
                onChange={handleResponsiveSlides}
              ></Form>
            </>
          ) : null}
        </Form>
      </>
    );
  };

  return (
    <div className={styles.formSlides}>
      <FormDropDown
        draggableId={'slide-1'}
        droppableId="slide-1"
        label={sliderImgs?.map(item => item.imgSrc) as string[]}
        renderLabel={arg => <img src={arg} alt="Slide" />}
        onAdd={handleAddSlide}
        onDelete={handleDelete}
        onMoveEnd={handleMove}
        renderForm={_renderSettingsBox}
        renderDeleteIcon={() => <i className="fas fa-trash"></i>}
        styleDeleteIcon={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}
      />
      {_renderGeneralSettings()}
    </div>
  );
};

export default memo(FormSlides);
