import React, { Component, Fragment, useState } from 'react';
import Form from 'components/Form/Form';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card, { CardProps } from 'components/Card/Card';
import {v4 as uuidv4} from 'uuid';

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

export interface FormSection1Props<T> {
  option: Option;
  onChange: (fieldName: string) => (result: any) => void; 
  moveChild: any;
}

export const FormSection2 = <T extends any>({option, onChange, moveChild}: FormSection1Props<T>) => {
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

  const _renderCards = () => {
    if(cards instanceof Array) {
      return cards.map((card, index) => {
        return (
          <Draggable draggableId={`Card ${index}`} index={index} key={uuidv4()}> 
            {(provided) => (
              <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >
                <Card {...card} />
              </div>
            )}
          </Draggable>
        )
      })
    }
    return <Card {...cards} />
  }
  return (
    <div>
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
          fieldName: 'color-picker',
          name: "Color Title",
        }
        ]}
        onChange={onChange}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={option.sectionId}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {_renderCards()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </DragDropContext>
    </div>
  )
  
};

export default FormSection2;