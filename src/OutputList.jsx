import React from 'react';
import OutputItem from './OutputItem';

class OutputList extends React.Component {
  render() {

    var finalResult = this.props.results.map((result, index) => {
      return (
        <OutputItem
          key={index}
          title={result.title}
          url={result.url}
          extract={result.extract}
        />
      );
    });

    console.log(finalResult);
    console.log(this.props.results);

    return (
      <div id="search-output" className="pure-g">
        <ul className="article-list pure-u-1">
          <h1>WHAT WHAT</h1>
          {finalResult}
        </ul>
      </div>
    );
  }
}

export default OutputList;