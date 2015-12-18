import React, { Component } from 'react';
import { TitleView } from './TitleView';
import { TitleEdit } from './TitleEdit';
import '../sass/title.scss';

export class TitleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: 'Are we out of the woods yet?',
      previousText: ''
    };
  }

  handleEdit = () => {
    this.setState({
      editing: true,
      previousText: this.state.text
    });
  }

  handleCancel = () => {
    this.setState({
      editing: false,
      text: this.state.previousText
    });
  }

  handleSave = () => {
    this.setState({editing: false});
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  }

  render() {
    if(this.state.editing) {
      return(
        <TitleEdit text={this.state.text}
          handleCancel={this.handleCancel}
          handleSave={this.handleSave}
          handleChange={this.handleChange}/>
      );
    } else {
      return (
        <TitleView text={this.state.text}
          handleEdit={this.handleEdit}/>
      );
    }
  }
}