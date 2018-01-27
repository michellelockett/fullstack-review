import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

    this.get25();
  }

  search (user) {
    var data = { "username" : user };
    console.log(`${user} was searched`);
    $.ajax({
      url: "http://localhost:1128/repos",
      method: 'POST',
      contentType: "application/json",
      data: JSON.stringify(data),
      dataType: "json",
      error: (err) => {
        console.log(err);
      },
      success: (response) => {
        this.get25();
      }
    });
  }

  get25() {
      $.ajax({
      url: "http://localhost:1128/repos",
      method: 'GET',
      dataType: 'json',
      error: (err) => {
        console.log(err);
      },
      success: (response) => {
        console.log(response);
        this.setState({'repos': response});
      }
    });

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));