import {createStore,combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import {  Reducer } from './reducer'
import { InitialLogin, InitialSignUp } from './forms';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    dish: Reducer,
    ...createForms({
        login: InitialLogin,
        signup: InitialSignUp
    })
    
})

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(logger)
    );

    return store;
}