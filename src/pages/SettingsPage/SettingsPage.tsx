import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { CarouselProps } from 'components/Carousel/Carousel';
import Form from 'components/Form/Form';
import PopUp from 'components/PopUp/PopUp';
import { MainTitleProps } from 'components/MainTitle/MainTitle';
import SideBar from 'components/SideBar/SideBar';
import { TextProps } from 'components/Text/Text';
import thunkGetImageGallery from 'pages/SettingsPage/thunks/thunkGetImageGallery/thunkGetImageGallery';
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
import thunkSaveAll from './thunks/thunkSaveAll/thunkSaveAll';
import thunkChangeInputCardForm from './thunks/thunkChangeInputCardForm/thunkChangeInputCardForm';
import thunkDeleteCard from './thunks/thunkDeleteCard/thunkDeleteCard';
import thunkAddCard from './thunks/thunkAddCard/thunkAddCard';
import { CardProps } from 'components/Card/Card';
import uploadFile from 'firebase/storage/uploadFile';
import thunkChangeIconCard from './thunks/thunkChangeIconCard/thunkChangeIconCard';
import FormSection3 from './components/FormSection3/FormSection3';
import { Section3Props } from 'components/Section3/Section3';
import { Section4Props } from 'components/Section4/Section4';
import FormSection4 from './components/FormSection4/FormSection4';
import thunkChangeRadioCardForm from './thunks/thunkChangeRadioCardForm/thunkChangeRadioCardForm';

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



export interface Option extends Partial<Section1Props<any> & Section2Props & Section3Props & Section4Props<any>> {
  sectionName: string;
  sectionId: string;
  slider?: boolean;

}
export interface PageProps {
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

  handleChangeInputCardForm = (nowIndexSection: number, nowIndexCard: number, fieldName: string, result: any) => {
    const { changeInputCardForm } = this.props;
    changeInputCardForm(fieldName, result, nowIndexSection, nowIndexCard);
  }

  handleChangeRadioCardForm = (nowIndexSection: number, nowIndexCard: number, fieldName: string, result: any) => {
    const { changeRadioCardForm } = this.props;
    changeRadioCardForm(fieldName, result, nowIndexSection, nowIndexCard);
  }


  handleChangeIconCard = (nowIndexSection: number) => {
    return (nowIndexCard: number) => {
      return (imgSrc: string) => {
        const { changeIconCard } = this.props;
        changeIconCard(imgSrc, nowIndexSection, nowIndexCard)
      }
    }
  }

  handleDeleteCard = (nowIndexSection: number) => {
    return (nowIndexCard: number) => {
      const { deleteCard } = this.props;
      deleteCard(nowIndexSection, nowIndexCard)
    }
  }

  handleAddCard = (nowIndexSection: number) => {
    return (data: CardProps) => {
      const { addCard } = this.props;
      addCard(data, nowIndexSection);
    }
  }

  handleChangeCardForm = (nowIndexSection: number) => {
    return (nowIndexCard: number) => {
      return (fieldName: string) => {
        return (result: any) => {
          if(fieldName === 'card title' || fieldName === 'card text') {
            this.handleChangeInputCardForm(nowIndexSection, nowIndexCard, fieldName, result);
          }
          if(fieldName === 'align card title' || fieldName === 'align card text') {
            this.handleChangeRadioCardForm(nowIndexSection, nowIndexCard, fieldName, result);
          };
          if(fieldName === 'card icon') {
            this.handleUploadFile('icon', result, nowIndexSection);
          }
        }
      }
    }
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
        if(fieldName === 'slider' || fieldName === 'has divider') {
          this.handleCheck(fieldName, result, nowIndex)
        }
        if(fieldName.includes('upload')) {
          this.handleUploadFile(sectionId, result, nowIndex);
        }
        if(fieldName === 'title color' || fieldName === 'text color' || fieldName === 'divider color') {
          this.handleChangeColor(fieldName, result, nowIndex)
        }
      }
    }
  }

  handleSave = () => {
    const { saveAll } = this.props;
    saveAll();
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

  _renderForm1 = (option: Option, indexSection: number) => {
    return <FormSection1
      option={option}
      onChange={this.handleChangeForm(option.sectionId, indexSection)}
    />
  }

  _renderForm2 = (option: Option, indexSection: number) => {
    return <FormSection2
      option={option}
      onChange={this.handleChangeForm(option.sectionId, indexSection)}
      onChangeCard={this.handleChangeCardForm(indexSection)}
      onDelete={this.handleDeleteCard(indexSection)}
      onAdd={this.handleAddCard(indexSection)}
      onChangeIcon={this.handleChangeIconCard(indexSection)}
      moveChild={this.handleMoveChild(indexSection)}
    />
  }

  _renderForm3 = (option: Option, indexSection: number) => {
    return <FormSection3
      option={option}
      onChange={this.handleChangeForm(option.sectionId, indexSection)}
    />
  }

  _renderForm4 = (option: Option, indexSection: number) => {
    return <FormSection4
      option={option}
      onChange={this.handleChangeForm(option.sectionId, indexSection)}
    />
  }

  _renderSettingBoxSwitch = (option: Option, indexSection: number) => {
    switch (option.sectionName) {
      case "Section 1":
        return this._renderForm1(option, indexSection);
      case "Section 2":
        return this._renderForm2(option, indexSection);
      case "Section 3":
        return this._renderForm3(option, indexSection);
      case "Section 4":
        return this._renderForm4(option, indexSection);
      default:
        return null;
    }
  }

  _renderSettingsBox = (option: Option, index: number) => {
    return (
      <PopUp id={option.sectionId}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {this._renderSettingBoxSwitch(option, index)}
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
                    <Icon fontAwesomeClass="fas fa-cog" styleIcon={{width: 20, height: 20}}/>
                  </Button>
                  <Button onClick={this.handleDelete(element)} initial>
                    <Icon fontAwesomeClass="fas fa-times" styleIcon={{width: 20, height: 20}}/>
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
    getImageGallery('icon');
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
    return (
      <Fragment>
        {this._renderSwitch()}
        <Button initial onClick={this.handleSave} style={{position: 'fixed', bottom: 10, right: 10, zIndex: 100}}>
          <Icon fontAwesomeClass="fas fa-save" />
        </Button>
      </Fragment>
    );
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
  imagesGallery: state.rootSettingsPageReducers.imageGallery.data,
});

const mapDispatchToProps = {
  getData: thunkGetData,
  addSection: thunkAddSection,
  deleteSection: thunkDeleteSection,
  moveSection: thunkMoveSection,
  getImageGallery: thunkGetImageGallery,
  uploadFile: thunkUploadFile,
  moveUpSection: thunkMoveUpSection,
  moveDownSection: thunkMoveDownSection,
  changeInput: thunkChangeInput,
  changeRadio: thunkChangeRadio,
  changeCheckBox: thunkChangeCheckBox,
  moveChild: thunkMoveChild,
  changeColor: thunkChangeColor,
  saveAll: thunkSaveAll,
  changeInputCardForm: thunkChangeInputCardForm,
  changeRadioCardForm: thunkChangeRadioCardForm,
  deleteCard: thunkDeleteCard,
  addCard: thunkAddCard,
  changeIconCard: thunkChangeIconCard
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
