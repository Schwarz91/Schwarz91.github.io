import React, { Component } from 'react';
import './App.css';
import {goodsData} from './Fish.js'

const Goods = (data) => {
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

export default Goods;
