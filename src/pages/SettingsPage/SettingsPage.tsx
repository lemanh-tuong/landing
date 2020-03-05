/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable react/destructuring-assignment */
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { CarouselProps } from 'components/Carousel/Carousel';
import Form from 'components/Form/Form';
import PopUp from 'components/PopUp/PopUp';
import { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import SideBar from 'components/SideBar/SideBar';
import { TextProps } from 'components/Text/Text';
import writeFireBase from 'firebase/writeFireBase';
import React, { ChangeEvent, CSSProperties, PureComponent } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import CheckBox from './components/CheckBox/CheckBox';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Input from './components/Input/Input';
import Radio from './components/Radio/Radio';
import Select from './components/Select/Select';
import RenderSection from './RenderSection/RenderSection';
import styles from './SettingsPage.module.scss';
import thunkGetData from './thunks/thunkGetData';

const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';

// a little function to help us with reordering the result
const reorder = (list: Option[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging: boolean, draggableStyle: CSSProperties): CSSProperties => ({
  userSelect: 'none',
  padding: 20,
  margin: `0 0 20px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});



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

class SettingsPage extends PureComponent<any, PageProps> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     pageName: this.props.pageName,
  //     elements: [...this.props.elements],
  //     slider: this.props.slider || false,
  //   }
  // }

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

  handleAdd = () => {
    if (this.option.sectionName) {
      this.setState({
        ...this.state,
        elements: [...this.state.elements.concat(this.option)]
      }, () => writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements], slider: this.state.slider }));
      this.option = { sectionName: '', sectionId: '', ...defaultOption };
    }
  };

  handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const elements = reorder(
      this.state.elements,
      result.source.index,
      result.destination.index
    );

    this.setState({
      ...this.state,
      elements: [...elements]
    }, () => writeFireBase({ pageName: 'Home Page', elements: [...this.state.elements], slider: this.state.slider }));
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
        elements: [...state.elements.slice(0, Id), { ...newElement }, ...state.elements.slice(Id + 1, state.elements.length)]
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
        elements: [...state.elements.slice(0, Id), { ...newElement }, ...state.elements.slice(Id + 1, state.elements.length)]
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

  handleSelect = (id: string, type: string) => {
    return ({ value }: { value: string }) => {
      const Id = parseInt(id) - 1;
      const elementChange = Object.assign({}, this.state.elements[Id]);
      const newElement = type === 'title' ? {
        ...elementChange,
        colorMainTitle: value
      } : {
          ...elementChange,
          colorText: value
        };
      this.setState(state => ({
        ...state,
        elements: [...state.elements.slice(0, Id), { ...newElement }, ...state.elements.slice(Id + 1, state.elements.length)]
      }));
    };
  };


  _renderSettingsBox = ({ sectionId }: Option) => {
    return (
      <PopUp id={sectionId}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Form
            formName="settings"
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
            fieldsSelect={[
              {
                data: [
                  {
                    name: 'black',
                    value: '#252c41'
                  },
                  {
                    name: 'white',
                    value: 'white',
                  },
                  {
                    name: 'black2',
                    value: 'rgba(0,0,0,.7)'
                  },
                  {
                    name: 'black3',
                    value: 'rgba(0,0,0,.8)'
                  },
                  {
                    name: 'black4',
                    value: 'rgba(0,0,0,.9)'
                  },
                  {
                    name: 'darkblue',
                    value: 'rgb(0, 27, 68)'
                  },
                  {
                    name: 'green',
                    value: '#3ece7e'
                  },
                  {
                    name: 'pink',
                    value: '#f06292'
                  }
                ],
                defaultValue: {
                  value: 'red',
                  name: 'red'
                },
                renderInput: ({ value, name }) => <ColorPicker color={name} name={name} />,
                renderItem: ({ value, name }) => <ColorPicker color={value} name={name} />,
                onChange: this.handleSelect(sectionId, 'title')
              },
              {
                data: [
                  {
                    name: 'black',
                    value: '#252c41'
                  },
                  {
                    name: 'white',
                    value: 'white',
                  },
                  {
                    name: 'black2',
                    value: 'rgba(0,0,0,.7)'
                  },
                  {
                    name: 'black3',
                    value: 'rgba(0,0,0,.8)'
                  },
                  {
                    name: 'black4',
                    value: 'rgba(0,0,0,.9)'
                  },
                  {
                    name: 'darkblue',
                    value: 'rgb(0, 27, 68)'
                  },
                  {
                    name: 'green',
                    value: '#3ece7e'
                  },
                  {
                    name: 'pink',
                    value: '#f06292'
                  }
                ],
                defaultValue: {
                  value: 'red',
                  name: 'red'
                },
                renderInput: ({ value, name }) => <ColorPicker color={name} name={name} />,
                renderItem: ({ value, name }) => <ColorPicker color={value} name={name} />,
                onChange: this.handleSelect(sectionId, 'text')
              }
            ]}

            renderSelect={({ defaultValue, data, renderInput, renderItem, onChange }) => <Select onChange={onChange} data={data} defaultValue={defaultValue}
              renderItem={!!renderItem ? renderItem : ({ value, name }) => <div>{value}{name}</div>} // WTF did I write?
              renderInput={!!renderInput ? renderInput : ({ value, name }) => <ColorPicker color={value} name={name} />} // WTF did I write?
            />}
            onSubmit={this.handleSubmit(sectionId)}
          />
        </div>
      </PopUp>
    );
  };

  _render = (element: Option, index: number) => (
    <Draggable draggableId={element.sectionId} index={index} key={element.sectionId}>
      {(provided, snapshot) => {
        return (
          <div className={styles.section} style={getItemStyle(snapshot.isDragging, !!provided.draggableProps.style ? provided.draggableProps.style : {})} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} key={element.sectionId} >
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
            {RenderSection({
              mainTitle: !!element.mainTitle ? element.mainTitle : defaultTitle,
              sectionName: element.sectionName,
              text: !!element.text ? element.text : defaultText,
              alignMainTitle: !!element.alignMainTitle ? element.alignMainTitle : 'left',
              alignText: !!element.alignText ? element.alignText : 'left',
              colorMainTitle: element.colorMainTitle ? element.colorMainTitle : 'white',
              colorText: element.colorText ? element.colorText : 'white',
              slider: element.slider ? element.slider : false,
            })}
            {this._renderSettingsBox(element)}
          </div>
        );
      }}
    </Draggable>
  );

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    // console.log(this.state);
    console.log(this.props)
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <SideBar onEvent={this.handleDragStart} />
        <div className={styles.mainContent} onMouseUp={this.handleAdd}>
          <Droppable droppableId="2" type="Main Content">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>{
                !!this.state.elements && this.state.elements.map((element, index) => this._render(element, index))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

// const SettingsPage = () => {
//   return <SettingsBox />;
// };

const mapStateToProps = (state: any) => ({
  pageName: state.settingsReducers.pageName,
  elements: state.settingsReducers.elements,
  slider: state.settingsReducers.slider
});

const mapDispatchToProps = {
  getData: thunkGetData,
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
