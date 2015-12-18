import React, { Component } from 'react';

export class TitleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='button pencil'
          onClick={this.props.handleEdit}/>
        <h1>
          {this.props.text}
        </h1>
      </div>
    );
  }
}