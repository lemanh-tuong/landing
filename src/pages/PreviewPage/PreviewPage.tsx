import readFireBase from 'firebase/readFireBase';
import RenderSection from 'pages/SettingsPage/RenderSection/RenderSection';
import { Option, PageProps } from 'pages/SettingsPage/SettingsPage';
import React, { PureComponent } from 'react';

class PreViewPage extends PureComponent {
  state: PageProps = {
    elements: [],
    pageName: ''
  };



  componentDidMount() {
    readFireBase(this.handleGetData);
  }

  handleGetData = (arg: Option) => {
    this.setState(arg);
  };
  render() {
    console.log(this.state);
    const { elements } = this.state;
    return <div className="Preview">
      {!!elements && elements.map(element => RenderSection(element))}
    </div>;
  }
}

export default (PreViewPage);
