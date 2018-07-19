export const itemAddAction = (price, id) => ({
    type: 'ADD',
    price,
    id,
})

export const itemRemoveAction = (price, id) => ({
    type: 'REMOVE',
    price,
    id,
})