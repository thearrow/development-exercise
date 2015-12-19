import React, { Component } from 'react';
import { TitleView } from './TitleView';
import { TitleEdit } from './TitleEdit';
import '../sass/title.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    let partial = '';

    if(this.state.editing) {
      partial =
        <TitleEdit
          text={this.state.text}
          key='title-edit'
          handleCancel={this.handleCancel}
          handleSave={this.handleSave}
          handleChange={this.handleChange}/>;
    } else {
      partial =
        <TitleView
          key='title-view'
          text={this.state.text}
          handleEdit={this.handleEdit}/>;
    }

    return(
        <ReactCSSTransitionGroup
          transitionName='title-fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={500}>

        {partial}

        </ReactCSSTransitionGroup>
      );
  }
}