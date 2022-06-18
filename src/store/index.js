import { legacy_createStore as createStore, applyMiddleware, legacy_createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducers';

export let store = createStore(reducer, applyMiddleware(thunk));

export let persistor = persistStore(store);
