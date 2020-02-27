import { Section1Props } from 'components/Section1/Section1';
import React, { PureComponent } from 'react';
const pattern = [
  {
    name: 'Section 1',
  },
  {
    name: 'Section 2',
  },
  {
    name: 'Section 3',
  },
];

interface Options extends Section1Props<any> {
}
class SettingsPage extends PureComponent<{}, Options> {
  constructor() {
    super({}, null);
    this.state = {
      mainTitle: '',
      alignMainTitle: undefined,
      fontSizeMainTitle: undefined,
      colorMainTitle: undefined,
      classMainTitle: '',
      styleMainTitle: {},
      text: '',
      alignText: undefined,
      colorText: undefined,
      fontSizeText: undefined,
      classText: '',
      styleText: {},
      hasDivider: false,
      dividerColor: 'white',
      data: [],
      slider: false,
      hasDots: false,
      hasNav: true,
      navClass: '',
      dotClass: '',
      margin: 0,
      itemShow: undefined,
      responsive: undefined,
      renderItem: undefined,
      fluid: false,
      typeMockUp: 'Mac',
      classMockUp: '',
      styleMockUp: {},
      className: '',
      aspectRatio: 'aspectRatio-11',
      darkMode: false,
      bgColor: undefined,
      reverse: false,
    };
  }

  handleInput = (type: 'title' | 'text') => {
    return (e: any) => {
      this.setState((state: any) => {
        if (type === 'title') {
          return {
            ...state,
            text: state.text,
            mainTitle: e.target.value
          };
        }
        if (type === 'text') {
          return {
            ...state,
            mainTitle: state.mainTitle,
            text: e.target.value,
          };
        }
      });
    };
  };

  render() {
    return (
      <div className="SettingsPage">
        <input onChange={this.handleInput('title')} placeholder="Title" />
        <input onChange={this.handleInput('text')} placeholder="Text" />
      </div>
    );
  }
}

export default SettingsPage;
