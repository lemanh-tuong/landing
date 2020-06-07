import img1 from 'assets/img/settings/advanced-rating-and-reviews.png';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import FormDropDown from 'components/FormDropDown/FormDropDown';
import { Section3Props } from 'components/Section3/Section3';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkAddSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkAddSlide2/thunkAddSlide2';
import thunkDeleteSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkDeleteSlide2/thunkDeleteSlide2';
import thunkMoveSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkMoveSlide2/thunkMoveSlide2';
import React, { FC } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import FormSlide2 from '../FormSlide2/FormSlide2';
import styles from './FormSlides2.module.scss';

export interface FormSlides2Props {
  nowIndexSection: number;
  draggableField: boolean;
}

const slidePropertyDefault: Omit<Section3Props, 'sectionid'> = {
  imageSectionCol: { imgSrc: img1 },
  sectionId: '1',
  mainTitle: 'App Term Boxes Settings',
  alignMainTitle: 'left',
  hasDivider: true,
  dividerColor: '#000',
  reverse: true,
  text: 'Insert Listing Locations and Listing Categories block to your app by using App Term Boxes shortcode.',
};

const FormSlides2: FC<FormSlides2Props> = ({ nowIndexSection, draggableField }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { sliderSection, fluid, itemShow, margin, draggable } = element;

  // Dispatch
  const changeCheckBox = thunkChangeCheckBox();
  const changeItemShow = thunkChangeInput();
  const addSlide = thunkAddSlide2();
  const deleteSlide = thunkDeleteSlide2();
  const moveSlide = thunkMoveSlide2();

  const handleAddSlide = () => {
    addSlide({ slideProperty: slidePropertyDefault, nowIndexSection: nowIndexSection, nowIndexSlide: sliderSection?.length || 0 });
  };

  const handleDelete = (nowIndexSlide: number) => {
    return () => deleteSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newElements = sliderSection ? reorder(
      sliderSection,
      result.source.index,
      result.destination.index
    ) : [];
    moveSlide({ data: newElements, nowIndexSection: nowIndexSection });
  };

  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'input' || fieldType === 'number') {
        changeItemShow({ fieldName: fieldName, nowIndexSection: nowIndexSection, value: result });
      }
    };
  };

  //Render

  const _renderSettingForm = (nowIndexSlide: number) => {
    return <FormSlide2 nowIndexSection={nowIndexSection} nowIndexSlide={nowIndexSlide} />
  }

  const _renderGeneralSettings = () => {
    return (
      <Form
        onChange={handleChangeForm}
        fields={[
          {
            fieldId: 'slides-input-1',
            fieldName: 'itemShow',
            label: 'Ammount Item Show',
            fieldType: 'number',
            defaultNumber: itemShow,
          },
          {
            fieldId: 'slides-input-2',
            fieldName: 'margin',
            label: 'Margin',
            fieldType: 'number',
            defaultNumber: margin,
          },
          {
            fieldId: 'slides-checkbox-1',
            fieldName: 'fluid',
            label: 'Fluid',
            fieldType: 'checkbox',
            defaultChecked: fluid,
          },
          {
            fieldId: 'draggable-slides-2',
            fieldName: 'draggable',
            label: 'Draggable',
            fieldType: 'checkbox',
            defaultChecked: draggable,
            hidden: !draggableField
          }
        ]}
      >
      </Form>
    );
  };

  return (
    <div className={styles.formSlides}>
      <FormDropDown
        draggableId='slide-2'
        droppableId='slide-2'
        label={sliderSection?.map(item => item.mainTitle) as string[]}
        onAdd={handleAddSlide}
        onMoveEnd={handleMove}
        onDelete={handleDelete}
        renderForm={_renderSettingForm}
      />
      {_renderGeneralSettings()}
    </div>
  );
};

export default FormSlides2;
