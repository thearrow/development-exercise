import React, { Component } from 'react';

export class TitleEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = this.props.text;

    return (
      <div>
        <div className='button cancel'
          onClick={this.props.handleCancel}/>
        <div className='button save'
          onClick={this.props.handleSave}/>
        <input className='editing' type="text"
          value={text}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
}