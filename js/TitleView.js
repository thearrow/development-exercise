import React, { Component } from 'react';
import '../styles/TitleView.scss';

export class TitleView extends Component {
  constructor(props) {
    super(props);
    this.lines = this.buildLines();
  }

  /**
   * Split the title into roughly 15-character-long lines for SVG mask
   * @return {string[]} string array of title lines
   */
  buildLines() {
    let words = this.props.text.split(' ') || [];
    let line = '';
    let lines = [];
    let counter = 0;
    let limit = 15;

    for (let word of words) {
      if (counter < limit) {
        line += word + ' ';
        counter += word.length + 1;
      } else {
        lines.push(line);
        counter = word.length + 1;
        line = word + ' ';
      }
    }
    lines.push(line);

    return lines;
  }

  /**
   * Create SVG <text> element for each line of the title
   * @return {JSX[]} array of JSX for SVG text elements
   */
  createSVGTextElements() {
    let titleLines = [];
    for (let i = 0; i < this.lines.length; i++) {
      titleLines.push(
        <text
          id={'title' + (i+1)}
          key={i}
          className='titleLine'
          x="10"
          y={(i+1) + 'em'}>
            {this.lines[i]}
        </text>
      );
    }

    return titleLines;
  }

  render() {
    let titleLines = this.createSVGTextElements();

    return (
      <div className='title-view'>
        <div className='button pencil'
          onClick={this.props.handleEdit}/>
        <svg className='title' style={{height: (this.lines.length + .4) + 'em'}}>
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%" >
              <rect id="alpha" x="0" y="0" width="100%" height="100%"/>
              {titleLines}
            </mask>
          </defs>
          <rect id="base" x="0" y="0" width="100%" height="100%"/>
        </svg>
      </div>
    );
  }
}