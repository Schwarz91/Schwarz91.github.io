const initialState = {
    count: 0,
    sum: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + 1,
                sum: state.sum + parseInt(price)
            }
        default:
        return state;
    }
}

export default rootReducer;