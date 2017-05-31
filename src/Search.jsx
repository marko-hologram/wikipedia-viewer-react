import React from 'react';

class WikiSearch extends React.Component {
  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    return (
      <div className="search-input">
        <form className="pure-form" onSubmit={this.props.onSubmit}>
          <div className="pure-u-1 pure-u-md-3-4">
            <input type="text" id="search-input" ref={(input) => this.searchInput = input} onChange={this.props.onChange} className="pure-input pure-u-1" placeholder="Input your search term here..."></input>
          </div>
          <div className="pure-u-1 pure-u-md-1-4 button-wrapper">
            <button type="submit" id="search-button" className="pure-button pure-button-primary pure-u-1 pure-u-md-23-24">Search</button>
          </div>
        </form>
        <a href="https://en.wikipedia.org/wiki/Special:Random" alt="Open a Random Wikipedia article" target="_blank" rel="noopener noreferrer">or see a random Wikipedia article</a>
      </div>
    );
  }

};

export default WikiSearch;
