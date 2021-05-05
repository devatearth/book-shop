import {createStore,applyMiddleware, combineReducers} from 'redux';
import loginReducer from './reducers/LoginReducer';
import authorReducer from './reducers/AuthorReducer';
import GuestReducer from './reducers/guestreducer'
import thunk from 'redux-thunk';
const reducersCombined = combineReducers({
    login : loginReducer,
    author : authorReducer,
    guest : GuestReducer
});
const store = createStore(reducersCombined, applyMiddleware(thunk));
export default store;