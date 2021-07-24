import { Dishes } from '../SharedData/Dishes';
import {ADD_ITEM,REMOVE_ITEM ,SUB_QUANTITY,ADD_QUANTITY,VEG_ITEMS,NON_VEG,NO_FILTER, CLEAR_CART} from './ActionTypes';


export const initialState = {
    dishes: Dishes,
    addedItems: [],
    total: 0,
    items: Dishes

};

export  const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM :{
                
                let addedItem = state.dishes.find(item => item.id === action.id)
                //check if the action id exists in the addedItems
                let existed_item= state.addedItems.find(item => action.id === item.id)
                if(existed_item)
                {
                    addedItem.quantity += 1 
                    return{
                            ...state,
                            total: state.total + Number(addedItem.price ),
                              
                        }
                }
                else{
                    addedItem.quantity = 1;
                    //calculating the total
                    let newTotal = state.total + Number(addedItem.price ) 
            
                    return{
                            ...state,
                            addedItems: [...state.addedItems, addedItem],
                            total : newTotal
                            
                    }
            
                }
            };

	    case REMOVE_ITEM:{
                let itemToRemove= state.addedItems.find(item=> action.id === item.id)
                let new_items = state.addedItems.filter(item=> action.id !== item.id)
                //calculating the total
                let newTotal = state.total - (Number(itemToRemove.price) * itemToRemove.quantity )
        
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                    
                }
            };

        case ADD_QUANTITY:{
                let addedItem = state.dishes.find(item=> item.id === action.id)
                addedItem.quantity += 1 
                console.log(addedItem.quantity)
                let newTotal = state.total + Number(addedItem.price )
                return{
                        ...state,
                        total: newTotal
                        
                }
            };

        case SUB_QUANTITY:{
                let addedItem = state.dishes.find(item=> item.id === action.id) 
                //if the qt == 0 then it should be removed
                if(addedItem.quantity === 1){
                    let new_items = state.addedItems.filter(item=>item.id !== action.id)
                    let newTotal = state.total - Number(addedItem.price )
                    return{
                            ...state,
                            addedItems: new_items,
                            total: newTotal
                            
                    }
                }
                else {
                    addedItem.quantity -= 1
                    let newTotal = state.total - Number(addedItem.price )
                    return{
                            ...state,
                            total: newTotal
                            
                    }
                }
            };

        case CLEAR_CART:{
            return{
                ...state,
                total: 0,
                addedItems: []
            }
        }    

        case VEG_ITEMS:{
            let veg = state.dishes.filter(item=> item.category === action.payload)
            console.log(veg)
            return{
                ...state,
                items: veg
            }
        }
        
        case NON_VEG:{
            let nv = state.dishes.filter(item => item.category === action.payload)
            console.log(nv)
            return{
                ...state,
                items: nv
            }
        }

        case NO_FILTER:{
            return{
                ...state,
                items: state.dishes
            }
        }

        default:
            return state;
    }
            
    
        
};

