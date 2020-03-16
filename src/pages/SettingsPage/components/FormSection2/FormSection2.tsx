import React, { Component, Fragment, useState, memo } from 'react';
import Form from 'components/Form/Form';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card, { CardProps } from 'components/Card/Card';
import {v4 as uuidv4} from 'uuid';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import PopUp from 'components/PopUp/PopUp';
import FormChangeCard from '../FormChangeCard/FormChangeCard';import icon1 from 'assets/img/web_icons/paid-listings.svg';
import styles from './FormSection2.module.scss';
import { connect, useSelector } from 'react-redux';
import { icon } from 'pages/SettingsPage/selectors';

const cardDefaul:CardProps = {
  titleCard: 'Paid listings',
  textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.',
  iconImg: icon1,
  hasIcon: true, bgColorIcon: 'gradient-pink-orange'
}



const reorder = (list: CardProps[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export type FormSection1Field<T> = T & {
    fieldType: 'input' | 'radio' | 'checkbox' | 'file';
    fieldName: string;
}

export interface FormSection1Props {
  option: Option;
  onChange: (fieldName: string) => (result: any) => void;
  onChangeCard: (nowCardIndex: number) => (fieldName: string) => (result: any) => void;
  onDelete?: (nowCardIndex: number) => void;
  onAdd?: (data: CardProps) => void;
  onChangeIcon?: (nowIndexCard: number) => (imgSrc: string) => void;
  moveChild: any;
}

export const FormSection2 = ({option, onChange, onChangeCard, onDelete, onAdd, onChangeIcon, moveChild}: FormSection1Props) => {
  const { slider, cards } = option;

  const  handleDragEnd = (result: any) => {
    if(option.cards instanceof Array) {
      if (!result.destination) {
        return;
      }
      const newElements = option.cards ? reorder(
        option.cards,
        result.source.index,
        result.destination.index
      ) : [];
      moveChild(newElements);
    }
    return;
  };

  const handleDelete = (indexCard: number) => {
    return () => {
      onDelete?.(indexCard)
    }
  }

  const handleAdd = () => {
    onAdd?.(cardDefaul)
  }

  const _renderCards = () => {
    if(cards instanceof Array) {
      return cards.map((card, index) => {
        return (
          <Draggable draggableId={`Card ${index}`} index={index} key={uuidv4()}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >
                <div style={{position: 'relative'}}>
                  <div style={{position: 'absolute', top: 10, right: 10}}>
                    <ButtonGroup style={{ display: 'flex' }} align='right'>
                      <Button onClick={PopUp.show(`Card-${index}`)} initial>
                        <Icon fontAwesomeClass="fas fa-cog" styleIcon={{width: 20, height: 20}} />
                      </Button>
                      <Button initial onClick={handleDelete(index)}>
                        <Icon fontAwesomeClass="fas fa-times" styleIcon={{width: 20, height: 20}}/>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <Card {...card} />
              </div>
            )}
          </Draggable>
        )
      })
    }
    const id = uuidv4()
    return (
      <Draggable draggableId={`Card ${id}`} index={111} key={uuidv4()}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >
            <div style={{position: 'relative'}}>
              <div style={{position: 'absolute', top: 10, right: 10}}>
                <ButtonGroup style={{ display: 'flex' }} align='right'>
                  <Button onClick={PopUp.show(`Card-${id}`)} initial>
                    <Icon fontAwesomeClass="fas fa-cog" styleIcon={{width: 20, height: 20}} />
                  </Button>
                  <Button initial>
                    <Icon fontAwesomeClass="fas fa-times" styleIcon={{width: 20, height: 20}}/>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <Card {...cards} />
          </div>
        )}
      </Draggable>
    )
  }


  const _renderSetting = () => {
    if(cards instanceof Array) {
      return cards.map((_card, index) => (
        <PopUp id={`Card-${index}`}>
          <FormChangeCard onAnotherEvent={onChangeIcon?.(index)} onChange={onChangeCard(index)} option={option} />
        </PopUp>
      ))
    }
  }

  return (
    <div style={{padding: 30, background: 'white'}}>
      <Form
        fields={[
        {
          fieldType: 'input',
          fieldName: 'title',
          horizontal: true,
          defaultValue: 'Title'
        },
        {
          fieldType: 'radio',
          fieldName: 'align title',
          data: [
          {
            value: 'center',
            name: 'align title'
          },
          {
            value: 'left',
            name: 'align title'
          },
          {
            value: 'right',
            name: 'align title'
          },
          ],
        },
        {
          fieldType: 'checkbox',
          fieldName: 'slider',
          name: "Slider",
          checked: slider
        },
        {
          fieldType: 'color-picker',
          fieldName: 'title color',
          name: "Color Title",
        }
        ]}
        onChange={onChange}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={option.sectionId}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.gallery}>
                {_renderCards()}
                {_renderSetting()}
                <Button initial onClick={handleAdd}>
                  <Icon fontAwesomeClass="fas fa-plus"/>
                </Button>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </DragDropContext>
    </div>
  )

};

export default memo(FormSection2);
