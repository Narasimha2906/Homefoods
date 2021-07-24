import * as ActionTypes from './ActionTypes';

export const addToCart = (id) => {
    return{
        type: ActionTypes.ADD_ITEM,
        id
    }
};

//remove item action
export const removeItem=(id)=>{
    return{
        type: ActionTypes.REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: ActionTypes.SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ActionTypes.ADD_QUANTITY,
        id
    }
}

export const vegItems = () => {
    return{
        type: ActionTypes.VEG_ITEMS,
        payload: 'veg'
    }
}

export const nonVeg = () => {
    return{
        type: ActionTypes.NON_VEG,
        payload: 'Non-veg'
    }
}

export const noFilter = () => {
    return{
        type: ActionTypes.NO_FILTER
    }
}

export const clearCart = () => {
    return{
        type: ActionTypes.CLEAR_CART
    }
}

