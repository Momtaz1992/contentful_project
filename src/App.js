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
        <header>
          <div className="header">
            <span>Feel Free to Try Our Recipies</span>
          </div>
          <br />


        </header>
        <div className="search">
        <SearchBar  client={client}/> 
        </div>
        <div class="ball"></div>
          <div className="recipe-list">
              <Posts className="context" posts={this.state.articles}/>
          </div>
    </div>
  );
}}

export default App;
