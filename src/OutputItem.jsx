import React from 'react';

class OutputItem extends React.Component {
  render() {
    return (
      <div>
        <li className="clearfix pure-u-1">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <h2>{this.props.title}</h2>
            {this.props.extract}
          </a>
        </li>
      </div>
    );
  }
}

export default OutputItem;