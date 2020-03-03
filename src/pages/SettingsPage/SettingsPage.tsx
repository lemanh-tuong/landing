/* eslint-disable react/destructuring-assignment */
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { CarouselProps } from 'components/Carousel/Carousel';
import PopUp from 'components/PopUp/PopUp';
import { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import SideBar from 'components/SideBar/SideBar';
import { TextProps } from 'components/Text/Text';
import writeFireBase from 'firebase/writeFireBase';
import React, { ChangeEvent, PureComponent } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CheckBox from './components/CheckBox/CheckBox';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Input from './components/Input/Input';
import Radio from './components/Radio/Radio';
import Select from './components/Select/Select';
import SettingsBox from './components/SettingsBox/SettingsBox';
import RenderSection from './RenderSection/RenderSection';
import styles from './SettingsPage.module.scss';

const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';


export interface Option extends Partial<MainTitleProps>, Partial<TextProps>, Partial<CarouselProps<any>> {
  sectionName: string;
  sectionId: string;
  slider?: boolean;
}

export interface PageProps extends Pick<Option, 'slider'> {
  pageName: string;
  elements: Option[];
}

const defaultOption: PageProps = {
  pageName: '',
  elements: [],
  slider: false,

};

class SettingsPage extends PureComponent<PageProps, PageProps> {
  option: Option = {
    sectionName: '',
    sectionId: '',
    slider: false
  };

  state = { ...defaultOption };

  handleDragStart = (arg: Option) => {
    return () => {
      this.option = {
        ...arg,
        sectionId: `${this.state.elements.length + 1}`
      };
    };
  };

  handleDragEnd = () => {
    this.setState({
      ...this.state,
      elements: this.state.elements.concat(this.option)
    }, () => writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements], slider: this.state.slider }));
    this.option = { sectionName: '', sectionId: '', ...defaultOption };
  };

  handleDelete = (element: Option) => {
    return () => {
      const { elements } = this.state;
      const newElements = elements.filter(ele => element !== ele);
      this.setState(state => ({
        ...state,
        elements: [...newElements]
      }), () => writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements], slider: this.state.slider }));
    };
  };

  handleChangeInput = (type: string, id: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const Id = parseInt(id) - 1;
      const elementChange = Object.assign({}, this.state.elements[Id]);
      const newElement = type === 'title' ? {
        ...elementChange,
        mainTitle: value
      } : {
          ...elementChange,
          text: value
        };
      this.setState(state => ({
        ...state,
        elements: [...state.elements.slice(0, Id - 1), { ...newElement }, ...state.elements.slice(Id + 1, state.elements.length)]
      }));
    };
  };

  handleChageRadio = (type: string, id: string) => {
    return (result: any) => {
      const Id = parseInt(id) - 1;
      const elementChange = Object.assign({}, this.state.elements[Id]);
      const newElement = type === 'title' ? {
        ...elementChange,
        alignMainTitle: result
      } : {
          ...elementChange,
          alignText: result
        };
      this.setState(state => ({
        ...state,
        elements: [...state.elements.slice(0, Id - 1), { ...newElement }, ...state.elements.slice(Id + 1, state.elements.length)]
      }));
    };
  };

  handleCheck = (type: string) => {
    if (type === 'slider') {
      this.setState(state => ({
        ...state,
        slider: !state.slider
      }));
    }
  };

  handleSubmit = (id: string) => {
    return () => {
      PopUp.hide(id)();
      writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements], slider: this.state.slider });
    };
  };



  _renderSettingsBox = ({ sectionId }: Option) => {
    return (
      <PopUp id={sectionId}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <SettingsBox
            fieldsInput={[
              {
                name: 'title',
                type: 'text',
                defaultValue: 'Title 1',
                onChange: this.handleChangeInput('title', sectionId),
                key: '1',
              },
              {
                name: 'text',
                type: 'text',
                defaultValue: 'Title 2',
                onChange: this.handleChangeInput('text', sectionId),
                key: '2',
              },
            ]}
            renderItemInput={({ name, defaultValue, key, type, onChange }) => <Input key={key} onChange={onChange} label={name} value={defaultValue} type={type} />}
            fieldsCheckBox={[
              {
                checked: this.state?.slider ?? false,
                label: 'Slider',
                onClick: () => this.handleCheck('slider'),
              }
            ]}
            renderItemCheckBox={({ checked, label, onClick }) => <CheckBox label={label} checked={checked} onClick={onClick} />}
            fieldsRadio={[
              {
                label: 'Align Title',
                onClick: (result) => this.handleChageRadio('title', sectionId)(result),
                data: [
                  {
                    label: 'center',
                    name: 'align title'
                  },
                  {
                    label: 'left',
                    name: 'align title'
                  },
                  {
                    label: 'right',
                    name: 'align title'
                  },
                ]
              },
              {
                label: 'align text',
                onClick: (result) => this.handleChageRadio('text', sectionId)(result),
                data: [
                  {
                    label: 'center',
                    name: 'align text'
                  },
                  {
                    label: 'left',
                    name: 'align text'
                  },
                  {
                    label: 'right',
                    name: 'align text'
                  },
                ]
              }
            ]}
            renderItemRadio={({ label, data, onClick }) => <Radio onClick={onClick} label={label} data={data} />}
            fieldsColor={[
              {
                data: [
                  {
                    name: 'black',
                    color: '#252c41'
                  },
                  {
                    name: 'black2',
                    color: 'rgba(0,0,0,.7)'
                  },
                  {
                    name: 'black3',
                    color: 'rgba(0,0,0,.8)'
                  },
                  {
                    name: 'black4',
                    color: 'rgba(0,0,0,.9)'
                  },
                  {
                    name: 'darkblue',
                    color: 'rgb(0, 27, 68)'
                  },
                  {
                    name: 'green',
                    color: '#3ece7e'
                  },
                  {
                    name: 'pink',
                    color: 'f06292'
                  }
                ],
                defaultValue: {
                  color: 'red',
                  name: 'red'
                }
              }
            ]}
            renderItemColor={({ data, defaultValue }) => <Select renderItem={({ color, name }) => <ColorPicker color={color} name={name} />} data={data} defaultValue={defaultValue} />}
            onSubmit={this.handleSubmit(sectionId)}
          />
        </div>
      </PopUp>
    );
  };

  _render = (element: Option) => (
    <div className={styles.section}>
      <div className={styles.sectionTop}>
        <ButtonGroup style={{ display: 'flex' }} align='right'>
          <Button onClick={PopUp.show(element.sectionId)}>
            <i className="fas fa-cog"></i>
          </Button>
          <Button onClick={this.handleDelete(element)}>
            <i className="fas fa-times"></i>
          </Button>
        </ButtonGroup>
      </div>
      {RenderSection({ mainTitle: !!element.mainTitle ? element.mainTitle : defaultTitle, sectionName: element.sectionName, text: !!element.text ? element.text : defaultText, alignMainTitle: !!element.alignMainTitle ? element.alignMainTitle : 'left', alignText: !!element.alignText ? element.alignText : 'left' })}
      {this._renderSettingsBox(element)}
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
