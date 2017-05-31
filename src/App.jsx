import React from 'react';
import WikiHeader from './Header';
import WikiSearch from './Search';
import ErrorOutput from './Error';
import OutputList from './OutputList';
import 'purecss';
import 'purecss/build/grids-responsive-min.css'
import './App.css';

var resultsArray = [];
var errorText = "";
const wikiAPI = "https://en.wikipedia.org/w/api.php?&";
var wikiHeaders = {
  action: "query",
  format: "json",
  origin: "*",
  prop: "info|extracts",
  exsentences: 1,
  exlimit: 5,
  generator: "search",
  inprop: "url",
  gsrsearch: "",
  gsrnamespace: 0,
  gsrlimit: 5,
  exintro: 1
};

// Format headers to be used for a query string
function toQueryString(obj) {
  var parts = [];
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    }
  }
  return parts.join("&");
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      results: [],
      fetchError: false // to keep track if fetch is erroring or successing
    }

    this.ajaxCall = this.ajaxCall.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // AJAX using fetch
  ajaxCall() {
    resultsArray = []; // clear array every time ajax is called so that it doesn't just add new items to previous items
    toQueryString(wikiHeaders);

    fetch(wikiAPI + toQueryString(wikiHeaders)).then(function(response) {
      return response.json();
    }).then((json) => {
      for (var prop in json.query.pages) {

        // push response items to array so that state isn't directly changed (not changing state recommended by Facebook)
        resultsArray.push({
          title: json.query.pages[prop].title,
          url: json.query.pages[prop].fullurl,
          extract: json.query.pages[prop].extract
        });

        this.setState({
          results: resultsArray,
          fetchError: false
        }); // set state.results to resultsArray
      }
    }).catch((ex) => {
      console.log('Fetch request failed. Maybe parsing the JSON data failed or the search term didn\'t return any results.', ex); // log error if fetch fails
      // define error text
      errorText = 'Request failed or your search term "' + wikiHeaders.gsrsearch + '" doesn\'t return any results. Please try searching again.';
      this.setState({fetchError: true});

    });

  }

  handleChange(e) {
    wikiHeaders.gsrsearch = e.target.value; // get input value and store it
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Hey, this is a submit event!"); // show if function is being called

    // Call fetch
    this.ajaxCall();

    // Clear the search box after submit
    document.getElementById("search-input").value = "";
  }

  render() {
    return (
      <div className="full-wrapper pure-g">
        <div className="pure-u-1">
          <WikiHeader />
          <WikiSearch onChange={this.handleChange} onSubmit={this.handleSubmit} />
          { errorText !== "" && this.state.fetchError ? (
            <ErrorOutput errorText={errorText} />
            ) : (
            <OutputList results={this.state.results} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
