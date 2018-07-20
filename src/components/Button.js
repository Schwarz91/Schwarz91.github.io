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
  itemAdd: (price, id) => dispatch(itemAddAction(price, id)),
  itemRemove: (price, id) => dispatch(itemRemoveAction(price, id))
})

const Button = ({data, itemCount, itemAdd, itemRemove}) => {
    const button = data.map((item) => 
        {if(itemCount[item.id] < 1) {
            return <img className="button-img" src="http://bs.barcod.ru/upload/iblock/444/444e9b9d7400e141def517a2b9b5030f.png" onClick={() => itemAdd(item.price, item.id)} alt='Добавить в корзину' />;
        }else{
            return (
            <div> 
                <button onClick={() => itemRemove(item.price, item.id)}>-</button>
                <div>{itemCount[item.id]}</div>
                <button onClick={() => itemAdd(item.price, item.id)}>+</button>
            </div>
            );
        }
        }
    );
    return (
        <div className="buttons">
          {button}
        </div>
      );
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Button);