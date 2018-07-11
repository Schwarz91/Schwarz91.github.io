import React, { Component } from 'react';
import './App.css';
import {Goods} from './components/Goods.js';
import {goodsData} from './components/Fish.js';
import {handleClickAction} from './actions/Actions.js'


class App extends Component {
  
  handleClick = (price) => this.props.dispatch(handleClickAction())
    
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
