import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import 'bulma/css/bulma.css';
class App extends React.Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    searchKeyword: '',
  };
  addFood = (newFood) => {
    //add newFood to foods (state)
    this.setState({
      foods: this.state.foods.concat(newFood),
    });
  };
  handleSearch = (event) => {
    this.setState({
      searchKeyword: event.target.value,
      filteredFoods: this.state.foods.filter((food) => {
        return food.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      }),
    });
  };
  render() {
    return (
      <div className="App">
        Search for food: <input onChange={this.handleSearch} />
        <AddFood miguelsProp={this.addFood} />
        {this.state.filteredFoods.map((food, index) => {
          return (
            <FoodBox
              key={index}
              calories={food.calories}
              name={food.name}
              image={food.image}
            />
          );
        })}
      </div>
    );
  }
}
export default App;