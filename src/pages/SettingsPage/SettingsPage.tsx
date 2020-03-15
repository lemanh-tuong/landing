import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { CarouselProps } from 'components/Carousel/Carousel';
import Form from 'components/Form/Form';
import PopUp from 'components/PopUp/PopUp';
import { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import SideBar from 'components/SideBar/SideBar';
import { TextProps } from 'components/Text/Text';
import thunkGetImageGallerySection from 'pages/SettingsPage/thunks/thunkGetImageGallerySection/thunkGetImageGallerySection';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';
import React, { ChangeEvent,CSSProperties, PureComponent, Fragment, MouseEvent } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import RenderSection from './components/RenderSection/RenderSection';
import styles from './SettingsPage.module.scss';
import thunkAddSection from './thunks/thunkAddSection/thunkAddSection';
import thunkDeleteSection from './thunks/thunkDeleteSection/thunkDeleteSection';
import thunkGetData from './thunks/thunkGetData/thunkGetData';
import thunkMoveSection from './thunks/thunkMoveSection/thunkMoveSection';
import { v4 as uuidv4 } from 'uuid';
import thunkMoveUpSection from './thunks/thunkMoveUpSection/thunkMoveUpSection';
import thunkMoveDownSection from './thunks/thunkMoveDownSection/thunkMoveDownSection';
import thunkChangeInput from './thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from './thunks/thunkChangeRadio/thunkChangeRadio';
import thunkChangeCheckBox from './thunks/thunkChangeCheckBox/thunkChangeCheckBox';
import Icon from 'components/Icon/Icon';
import FormSection1 from './components/FormSection1/FormSection1';
import FormSection2 from './components/FormSection2/FormSection2';
import { Section2Props } from 'components/Section2/Section2';
import { Section1Props } from 'components/Section1/Section1';
import thunkMoveChild from './thunks/thunkMoveChild/thunkMoveChild';
import thunkChangeColor from './thunks/thunkChangeColor/thunkChangeColor';

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



export interface Option extends Partial<Section1Props<any> & Section2Props> {
  sectionName: string;
  sectionId: string;
  slider?: boolean;
}
export interface PageProps extends Pick<Option, 'slider'> {
  pageName: string;
  elements: Option[];
}

export interface PageState extends PageProps {
  sectionFocusing: string;
  sectionDragging: string;
}

const defaultOption: PageProps = {
  pageName: '',
  elements: [],
  slider: false,
};



class SettingsPage extends PureComponent<any, PageState> {

  option: Option = {
    sectionName: '',
    sectionId: ''
  };

  state = { ...defaultOption, sectionFocusing: '', sectionDragging: '' };

  handlePrepairAdd = (arg: Option) => {
    return () => {
      this.option = {
        ...arg,
        sectionId: uuidv4()
      };
    };
  };

  handleAdd = (index?: number) => {
    return () => {
      if (this.option.sectionId) {
        
        if(this.option.sectionName === 'Section 2') console.log(this.option.cards)
        !!(index === 0 || index) ? this.props.addSection(this.option, index) : this.props.addSection(this.option);
        this.option = {
          sectionName: '',
          sectionId: '',
          slider: false
        }
      }
    }
  };

  handleDuplicate = (arg: Option, index: number) => {
    return (e: any) => {
      e.stopPropagation();
      this.handlePrepairAdd(arg)();
      this.handleAdd(index)();
    }
  }

  handleDragStart = (sectionId: string) => {
    return () => {
      this.setState(state => ({
        ...state,
        sectionDragging: sectionId
      }))
    }
  }

  handleDragEnd = (result: any) => {
    const { elements, moveSection } = this.props;
    if (!result.destination) {
      return;
    }
    this.setState(state => ({
      ...state,
      sectionDragging: ''
    }))

    const newElements = reorder(
      elements,
      result.source.index,
      result.destination.index
    );
    moveSection(newElements);

  };

  handleDelete = (element: Option) => {
    return () => {
      const { deleteSection } = this.props;
      deleteSection(element);
    };
  };

  handleChangeInput = (fieldName: string, value: string, nowIndex: number) => {
    const { changeInput } = this.props
    changeInput(fieldName, value, nowIndex)
  };

  handleChageRadio = (fieldName: string,value: string, nowIndex: number) => {
    const { changeRadio } = this.props;
    changeRadio(fieldName, value, nowIndex)
  };

  handleCheck = (fieldName: string, result: boolean, nowIndex: number) => {
    const { changeCheckBox } = this.props;
    changeCheckBox(fieldName, result, nowIndex)
  };

  handleUploadFile = (path: string, file: File, nowIndex: number) => {
    const { uploadFile } = this.props;
    uploadFile(path, file, nowIndex);

  }

  handleChangeColor = (fieldName: string, color: string, nowIndex: number) => {
    const { changeColor } = this.props;
    changeColor(fieldName, color, nowIndex);
  }

  handleChangeForm = (sectionId: string, nowIndex: number) => {
    return (fieldName: string) => {
      return (result: any) => {
        if(fieldName === 'title' || fieldName === 'text' || fieldName === 'testInput') {
          this.handleChangeInput(fieldName, result, nowIndex);
        }
        if(fieldName === 'align title' || fieldName === 'align text') {
          this.handleChageRadio(fieldName, result, nowIndex);
        }
        if(fieldName === 'slider') {
          this.handleCheck(fieldName, result, nowIndex)
        }
        if(fieldName === 'upload') {
          this.handleUploadFile(sectionId, result, nowIndex);
        }
        if(fieldName === 'color-picker') {
          this.handleChangeColor(fieldName, result, nowIndex)
        }
      }
    }
  }

  handleSubmit = (id: string) => {
    return () => {
      PopUp.hide(id)();
    };
  };

  handleFocus = (sectionId: string) => {
    return () => {
      this.setState(state => ({
        ...state,
        sectionFocusing: sectionId
      }))
    }
  }

  handleMoveUp = (sectionProperty: Option, index: number) => {
    return () => {
      const { moveUpSection } = this.props;
      moveUpSection(sectionProperty, index)
    }
  }
  handleMoveDown = (sectionProperty: Option, index: number) => {
    return () => {
      const { moveDownSection } = this.props;
      moveDownSection(sectionProperty, index)
    }
  }

  handleMoveChild = (nowIndex: number) => {
    return (data: any[]) => {
      const { moveChild } = this.props;
      moveChild(data, nowIndex);
    }
  }
  
  

  _renderSettingsBox = (option: Option, index: number) => {
    return (
      <PopUp id={option.sectionId}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <FormSection2 
          option={option}
          onChange={this.handleChangeForm(option.sectionId, index)}
          moveChild={this.handleMoveChild(index)}
        />
        </div>
      </PopUp>
    );
  };

  _renderFocusing = (sectionProperty: Option, index: number) => {
    return (
      <Fragment>
        <Button onClick={this.handleMoveUp(sectionProperty, index)} initial >
          <Icon fontAwesomeClass="fas fa-angle-up" styleIcon={{width: 20, height: 20}} />
        </Button>
        <Button onClick={this.handleMoveDown(sectionProperty, index)} initial >
          <Icon fontAwesomeClass="fas fa-angle-down" styleIcon={{width: 20, height: 20}} />
        </Button>
        <Button onClick={this.handleDuplicate(sectionProperty, index)} initial >
          <Icon fontAwesomeClass="fas fa-copy" styleIcon={{width: 20, height: 20}} />
        </Button>
      </Fragment>
    )
  } 

  _renderSection = (element: Option, index: number) => {
    const { sectionFocusing, sectionDragging } = this.state;

    const focusing = element.sectionId === sectionFocusing ? styles.focusing : null;
    const dragging = focusing && element.sectionId === sectionDragging ? styles.dragging: null;
    return (
      <Draggable draggableId={element.sectionId} index={index} key={element.sectionId} >
        {(provided, snapshot) => {
          return (
          <div className={`${styles.section} ${focusing} ${/*${dragging}*/''} `} 
              style={getItemStyle(snapshot.isDragging, !!provided.draggableProps.style ? provided.draggableProps.style : {})} ref={provided.innerRef} 
              {...provided.dragHandleProps} {...provided.draggableProps} key={element.sectionId}
              onMouseDown={this.handleDragStart(element.sectionId)}
              onClick={this.handleFocus(element.sectionId)}
            >
              <div className={styles.sectionTop}>
                <ButtonGroup style={{ display: 'flex' }} align='right'>
                  {focusing ? this._renderFocusing(element, index) : null}
                  <Button onClick={PopUp.show(element.sectionId)} initial>
                    <Icon fontAwesomeClass="fas fa-cog" borderRadiusIcon='circle' styleIcon={{width: 20, height: 20}}/>
                  </Button>
                  <Button onClick={this.handleDelete(element)} initial>
                    <Icon fontAwesomeClass="fas fa-times" borderRadiusIcon='circle' styleIcon={{width: 20, height: 20}}/>
                  </Button>
                </ButtonGroup>
              </div>
              {RenderSection({...element})}
              {this._renderSettingsBox({...element}, index)}
            </div>
          );
        }}
      </Draggable>
    )
  };

  componentDidMount() {
    const { getData, getImageGallery } = this.props;
    getData();
    getImageGallery();
  }

  renderSuccess = () => {
    const { elements } = this.props;
    // return (
    //   <Upload onEvent={this.props.uploadFile} listImg={imagesGallery} />
    // )

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <SideBar onEvent={this.handlePrepairAdd} />
        <div className={styles.mainContent} onMouseUp={this.handleAdd()}>
          <Droppable droppableId="2" type="Main Content">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {elements.map((element: any, index: number) => this._renderSection(element, index))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }

  _renderSwitch = () => {
    const { statusRequestSection } = this.props;
    switch (statusRequestSection) {
      case 'loading':
        return <div>Loading</div>;
      case 'failure':
        return <div>Something went wrong</div>
      case 'success':
        return this.renderSuccess();
      default:
        return null;
    }
  }


  render() {
    return this._renderSwitch();
  }
}

// const SettingsPage = () => {
//   return <SettingsBox />;
// };

const mapStateToProps = (state: any) => ({
  pageName: state.rootSettingsPageReducers.settingsReducers.pageName,
  elements: state.rootSettingsPageReducers.settingsReducers.elements,
  slider: state.rootSettingsPageReducers.settingsReducers.slider,
  statusRequestSection: state.rootSettingsPageReducers.settingsReducers.status,
  imagesGallery: state.rootSettingsPageReducers.imageGallerySection.data,
});

const mapDispatchToProps = {
  getData: thunkGetData,
  addSection: thunkAddSection,
  deleteSection: thunkDeleteSection,
  moveSection: thunkMoveSection,
  getImageGallery: thunkGetImageGallerySection,
  uploadFile: thunkUploadFile,
  moveUpSection: thunkMoveUpSection,
  moveDownSection: thunkMoveDownSection,
  changeInput: thunkChangeInput,
  changeRadio: thunkChangeRadio,
  changeCheckBox: thunkChangeCheckBox,
  moveChild: thunkMoveChild,
  changeColor: thunkChangeColor,
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);