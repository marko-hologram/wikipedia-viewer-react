import React from 'react';

class OutputItem extends React.Component {
  render() {
    return (
      <div>
        <li className="pure-u-1">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <div className="output-text pure-u-lg-1">
              <h2>{this.props.title}</h2>
              <p dangerouslySetInnerHTML={{__html: this.props.extract}}></p>
            </div>
          </a>
        </li>
      </div>
    );
  }
}

export default OutputItem;