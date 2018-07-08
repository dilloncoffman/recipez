import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = "Your api key :)"; // Change this to your API key from food2fork.com/about/api

class App extends Component {
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`);

    // get data back from api and convert to json
    const data = await api_call.json();
    console.log(data.recipes[0].recipe_id);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;