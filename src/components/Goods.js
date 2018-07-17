import React from 'react';
import '../App.css';
import './Fish.js';
import {itemAddAction, itemRemoveAction} from '../actions/Actions.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.data,
  itemCount: state.itemCount
})

const mapDispatchToProps = (dispatch) => ({
  itemAdd: (price) => dispatch(itemAddAction(price)),
  itemRemove: (price) => dispatch(itemRemoveAction(price))
})

const Goods = ({data, itemCount, itemAdd, itemRemove}) => {
  const itemInfo = data.map((item) => 
    <div className="item" key = {item.id}>
      <h1 className="item-name">{item.name}</h1>
      <div className="item-info">
        <div className="item-info-img">
          <img src = {item.imgUrl} alt='Рыбка' />
        </div>
        <div className="item-info-data">
          <h2>Цена</h2>
          <p>{item.price} р.</p>
          <img className="button-img" src="http://bs.barcod.ru/upload/iblock/444/444e9b9d7400e141def517a2b9b5030f.png" onClick={() => itemAdd(item.price)} alt='Добавить в корзину' />
          <div className="buttons"> 
            <button onClick={() => itemRemove(item.price)}>-</button>
            <div>{itemCount}</div>
            <button onClick={() => itemAdd(item.price)}>+</button>
          </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goods);
