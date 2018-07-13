import React, { Component } from 'react';
import '../App.css';
import Goods from './Goods.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  count: state.count,
  sum: state.sum,
})

class App extends Component {  
  render() {
    return (
      <div className="App">
        <div className="basket">
          <h2>В корзине: {this.props.count} товаров, к оплате {this.props.sum} р.</h2>
        </div>
        <Goods />
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
