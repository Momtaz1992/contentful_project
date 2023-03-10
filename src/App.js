import React from 'react';
import './App.css';
import {client} from './client';
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    articles:[]
  }

  componentDidMount(){    //API call
    client.getEntries()
    .then((response)=>{
      console.log(response)
      this.setState({ articles: response.items });
    })
    .catch(console.error)
  }
  render () {
    return (
    <div className="App">
      <div className="container">
        <SearchBar  client={client}/> 
        <header>
          <div className="wrapper">
            <span>React and Contentful</span>
          </div>
        </header>
        <main>
          <div className="wrapper">
              <Posts className="context" posts={this.state.articles}/>
          </div>
        </main>
      </div>
    </div>
  );
}}

export default App;
