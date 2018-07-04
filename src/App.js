import React, { Component } from 'react';
import './App.css';

const goodsData = [
  {
    imgUrl: "http://rybkivse.ru/wp-content/uploads/2016/09/3424-00.jpg",
    name: "Петушок",
    price: 200,
  },
  {
    imgUrl: "http://akvariumnyerybki.ru/wp-content/uploads/2016/04/mechenosec-rybka_1-650x385.jpg",
    name: "Меченосец",
    price: 100,
  },
  {
    imgUrl: "https://womanadvice.ru/sites/default/files/23/articles_main_big/2017-04-04_0100/akvariumnye_rybki_gurami.jpg",
    name: "Гурами",
    price: 150,
  },
  {
    imgUrl: "https://myaquas.ru/wp-content/uploads/2016/11/Lebistes_reticulata03.jpg",
    name: "Гуппи",
    price: 40,
  },
  {
    imgUrl: "https://akvaok.ru/wp-content/uploads/2018/01/1111.jpg",
    name: "Сом",
    price: 70,
  },
  {
    imgUrl: "https://aquariuma.net/wp-content/uploads/2013/12/pterophyllumscalare1.jpg",
    name: "Скалярия",
    price: 120,
  },
  {
    imgUrl: "http://aquamir-za-steklom.ru/wp-content/uploads/2016/08/kuhli_loach-300x246.jpg",
    name: "Акантофтальмус",
    price: 60,
  },
  {
    imgUrl: "http://www.aquamir63.ru/_pu/0/89372777.jpg",
    name: "Моллинезия",
    price: 50,
  },
  {
    imgUrl: "http://aquaplantfish.ru/mollusk/ampul/ampulyariya.jpg",
    name: "Улитка",
    price: 20,
  }
];
const Goods = (props) => {
  const data = props.data;
  const itemInfo = data.map((item, index) => 
    <div className="item" key = {index}>
        <h1 className="item-name">{item.name}</h1>
        <div className="item-info">
          <div className="item-info-img">
            <img src = {item.imgUrl} />
          </div>
          <div className="item-info-data">
            <h2>Цена</h2>
            <p>{item.price} р.</p>
            <img className="button-img" src="http://bs.barcod.ru/upload/iblock/444/444e9b9d7400e141def517a2b9b5030f.png" onClick={() => props.handleClick(item.price)} />
          </div>
        </div>
    </div>
    );
  return (
    <div className="goods">
      {itemInfo}
    </div>
  );
};
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
