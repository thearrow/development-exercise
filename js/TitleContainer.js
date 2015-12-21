import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TitleView } from './TitleView';
import { TitleEdit } from './TitleEdit';
import '../styles/TitleContainer.scss';

export class TitleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: 'Are we out of the woods yet?',
      previousText: ''
    };
    this.database = [
      'it-is-impossible-to-walk-rapidly-and-be-unhappy',
      'we-dont-get-offered-crises-they-arrive',
      'i-have-seen-the-future-and-it-doesnt-work',
      'i-dwell-in-possibility',
      'knowledge-is-power'
    ];
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

  slugify(text) {
    if (text.length === 0) return 'please enter a post title';

    let result = text.toLowerCase();
    result = result.replace(/ /gi, '-');
    result = result.replace(/[^(0-9A-Za-z\-)]/gi, '');

    if (this.database.indexOf(result) > -1) {
      result += '-' + Math.random().toString(36).slice(-5);
    }

    return result;
  }

  render() {
    let partial = '';

    if(this.state.editing) {
      partial =
        <TitleEdit
          text={this.state.text}
          key='title-edit'
          slug={this.slugify(this.state.text)}
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
          transitionLeaveTimeout={300}>

        {partial}

        </ReactCSSTransitionGroup>
      );
  }
}