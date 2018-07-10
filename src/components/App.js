import React, { Component } from 'react';
import './App.css';
import {Goods} from './components/Goods.js';
import {goodsData} from './components/Fish.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      sum: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (price) {
    this.setState({count: this.state.count + 1});
    this.setState({sum: this.state.sum + parseInt(price)});
  };
  render() {
    return (
      <div className="App">
        <div className="basket">
          <h2>В корзине: {this.state.count} товаров, к оплате {this.state.sum} р.</h2>
        </div>
        <Goods data = {goodsData}
          handleClick = {this.handleClick} />
      </div>
    );
  }
}
export default App;
