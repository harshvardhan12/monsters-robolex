import React, { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/cardList';
import SearchBox from './Components/searchBox/searchBox';

class App extends Component {

  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  searchBoxHandler = (event) => {
    this.setState({
      searchField: event.target.value
    }, () => console.log(this.state));
  }

  render() {

    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return(
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.searchBoxHandler} />
        <CardList monsters={filteredMonsters} />
        
      </div>
    );
  }
}

export default App;
