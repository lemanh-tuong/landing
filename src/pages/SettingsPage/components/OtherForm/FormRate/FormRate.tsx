import authorAvatar from 'assets/img/web_icons/envato.svg';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import FormDropDown from 'components/FormDropDown/FormDropDown';
import Icon from 'components/Icon/Icon';
import { RateProps } from 'components/Rate/Rate';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddRate from 'pages/SettingsPage/thunks/thunksRate/thunkAddRate/thunkAddRate';
import thunkChangeInputRateForm from 'pages/SettingsPage/thunks/thunksRate/thunkChangeInputRateForm/thunkChangeInputRateForm';
import thunkDeleteRate from 'pages/SettingsPage/thunks/thunksRate/thunkDeleteRate/thunkDeleteRate';
import thunkMoveRate from 'pages/SettingsPage/thunks/thunksRate/thunkMoveRate/thunkMoveRate';
import React, { FC } from 'react';
import { DropResult } from 'react-beautiful-dnd';
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

const FormRate: FC<FormRateProps> = ({ nowIndexSection, nowIndexRate }) => {
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
  }

  const _renderSettingsBox = (nowIndexRate: number) => {
    const { authorAvatar, rateContent, authorName, purpose, stars } = rateList?.[nowIndexRate] as RateProps;
    return (
      <Form
        style={{ border: '1px solid', borderRadius: 5 }}
        fields={[
          {
            fieldId: `rate-rateContent-${sectionId}-${nowIndexRate}`,
            fieldType: 'input',
            fieldName: 'rateContent',
            label: 'Rate Content',
            defaultValue: rateContent,
          },
          {
            fieldId: `rate-authorName-${sectionId}-${nowIndexRate}`,
            fieldType: 'input',
            fieldName: 'authorName',
            label: 'Author Name',
            defaultValue: authorName,
          },
          {
            fieldId: `rate-purpose-${sectionId}-${nowIndexRate}`,
            fieldType: 'input',
            fieldName: 'purpose',
            label: 'Purpose',
            defaultValue: purpose,
          },
          {
            fieldId: `rate-stars-${sectionId}-${nowIndexRate}`,
            fieldType: 'number',
            fieldName: 'stars',
            label: 'Stars',
            defaultNumber: stars,
          }
        ]}
        onChange={handleChangeForm(nowIndexRate)}
      >
        <Link className={styles.link} to={`/admin/gallery?type=avatarAuthor&nowIndexSection=${nowIndexSection}&nowIndexRate=${nowIndexRate}&multiple=false`}>
          <Icon iconImg={authorAvatar} bgColorIcon={'gradient-pink-orange'} />
          <i className={`far fa-images ${styles.icon}`}></i>
        </Link>
      </Form>
    );
  };

  return (
    <div className={styles.editRateComponent}>
      <FormDropDown
        draggableId='rate'
        droppableId='rate'
        onDelete={handleDelete}
        onAdd={handleAdd}
        onMoveEnd={handleMoveRate}
        label={rateList?.map(item => item.rateContent) || []}
        renderForm={_renderSettingsBox}
        defaultFormShown={nowIndexRate}
      />
    </div>
  );
};

export default FormRate;
