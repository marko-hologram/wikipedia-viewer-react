import React from 'react';

class ErrorOutput extends React.Component {
  render() {
    return (
      <div id="search-output">
        <span>{this.props.errorText}</span>
      </div>
    );
  }
}

export default ErrorOutput;