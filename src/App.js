import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super(); // calls React.Component's constructor

    // the state often changes due to user interaction
    // whenever setState is called, React rerenders the compnent!
    this.state = {
      monsters: [],
      searchField: ''
    }

    // bind() sets the context of 'this' to whatver is passed to it
    // this.handleChange = this.handleChange.bind(this)
  } 
 
  // LIFECYCLE METHOD executed automatically by JS
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // Just 'this' is undefined as JS doesn't set the scope of 'this' by default
  // Arrow functions automatically bind the 'this' context to the place where they were defined initially
  // Use arrow functions on any class methods that you define which aren't part of React
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App"> 
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters = { filteredMonsters }/> 
      </div>
    )
  }
}

export default App;