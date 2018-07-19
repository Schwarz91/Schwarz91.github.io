import goodsData from '../components/Fish'

const array = Array.from(new Array(9), () => 0);

const initialState = {
    count: 0,
    sum: 0,
    data: goodsData,
    itemCount: array,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + 1,
                sum: state.sum + parseInt(action.price),
                itemCount: state.itemCount.map((item, index) => {
                    if(index === action.id) {
                        item = item + 1;
                    }
                    return item;
                })
            }
        case 'REMOVE':
            return {
                ...state,
                count: state.count - 1,
                sum: state.sum - parseInt(action.price),
                itemCount: state.itemCount.map((item, index) => {
                    if(index === action.id) {
                        item = item - 1;
                    }
                    return item;
                })
            }
        default:
        return state;
    }
}

export default rootReducer;