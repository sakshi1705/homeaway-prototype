import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers'
import promise from "redux-promise";



const middleware = [thunk];

const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(RootReducer, composePlugin(applyMiddleware(promise)));


export default store;