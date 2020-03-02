/* eslint-disable react/destructuring-assignment */
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import PopUp from 'components/PopUp/PopUp';
import { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import SideBar from 'components/SideBar/SideBar';
import { TextProps } from 'components/Text/Text';
import writeFireBase from 'firebase/writeFireBase';
import React, { PureComponent } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import RenderSection from './RenderSection/RenderSection';
import styles from './SettingsPage.module.scss';

export interface Option extends MainTitleProps, TextProps {
  sectionName: string;
  id: string;
}

export interface PageProps {
  pageName: string;
  elements: Option[];
}

export interface Options extends PageProps {
}


// const data = [
//   {
//     text: 'Section1'
//   },
//   {
//     text: 'Section2'
//   },
//   {
//     text: 'Section3'
//   },
// ];

const defaultOption: PageProps = {
  pageName: '',
  elements: []
};

class SettingsPage extends PureComponent {
  option: Option = {
    sectionName: '',
    id: '0'
  };
  state = { ...defaultOption };
  handleDragStart = (arg: Option) => {
    return () => {
      this.option = arg;
    };
  };

  handleDragEnd = () => {
    this.setState({
      ...this.state,
      elements: this.state.elements.concat(this.option)
    }, () => writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements] }));

    this.option = { sectionName: '', id: `${this.state.elements.length + 1}`, ...defaultOption };
  };

  handleDelete = (element: Option) => {
    return () => {
      const { elements } = this.state;
      const newElements = elements.filter(ele => element !== ele);
      this.setState(state => ({
        ...state,
        elements: [...newElements]
      }), () => writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements] }));
    };
  };

  handleChange = (id: string) => {
    return () => {
      console.log(this.state.elements[parseInt(id)]);
    };
  };

  // _renderSettingsBox = (element: Option) => {
  //   // console.log(id);
  //   console.log(element);
  //   return () => {
  //     return (
  //       <PopUp id={element.id}>
  //         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  //           <SettingsBox mainTitle={element.mainTitle} text={element.text} onSubmit={this.handleChange(element.id)} />
  //         </div>
  //       </PopUp>
  //     );
  //   };
  // };

  _render = (element: Option) => (
    <div className={styles.section}>
      <div className={styles.sectionTop}>
        <ButtonGroup style={{ display: 'flex' }} align='right'>
          <Button onClick={PopUp.show('1')}>
            <i className="fas fa-cog"></i>
          </Button>
          <Button onClick={this.handleDelete(element)}>
            <i className="fas fa-times"></i>
          </Button>
        </ButtonGroup>
      </div>
      {RenderSection(element)}
      {/* {this._renderSettingsBox(element)()} */}
    </div>
  );

  render() {
    console.log(this.state);
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <SideBar onEvent={this.handleDragStart} />
        <div className={styles.mainContent}>
          <Droppable isDropDisabled={true} droppableId="2" type="Test">
            {provided => <div ref={provided.innerRef} {...provided.droppableProps}>{
              !!this.state.elements && this.state.elements.map(element => this._render(element))
            }</div>}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

// const SettingsPage = () => {
//   return <SettingsBox />;
// };

export default SettingsPage;
