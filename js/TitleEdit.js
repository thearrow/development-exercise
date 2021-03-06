import React, { Component } from 'react';
import '../styles/TitleEdit.scss';

export class TitleEdit extends Component {
  constructor(props) {
    super(props);
  }

  validateTitle() {
    if(this.props.text.length === 0) return false;
    return true;
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.validateTitle()) {
      this.props.handleSave();
    } else if (event.key === 'Escape') {
      this.props.handleCancel();
    }
  }

  render() {
    let text = this.props.text;
    let saveBtnClass = 'button save';
    if (!this.validateTitle()) {
      saveBtnClass += ' disabled';
    }

    return (
      <div className='title-edit'>
        <div className='button cancel'
          onClick={this.props.handleCancel}/>

        <div className={saveBtnClass}
          onClick={this.props.handleSave}/>

        <div className='editing-container'>
          <input className='editing' type="text"
            value={text}
            onChange={this.props.handleChange}
            onKeyDown={this.handleKeyDown}/>

          <div className='slug'>
            <span className='slug light'>slug: </span>
            {this.props.slug}
          </div>
        </div>
      </div>
    );
  }
}