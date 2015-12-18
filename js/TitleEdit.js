import React, { Component } from 'react';

export class TitleEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = this.props.text;
    let saveBtnClass = 'button save';
    if (this.props.text.length === 0) {
      saveBtnClass += ' disabled';
    }

    return (
      <div>
        <div className='button cancel'
          onClick={this.props.handleCancel}/>
        <div className={saveBtnClass}
          onClick={this.props.handleSave}/>
        <input className='editing' type="text"
          value={text}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
}