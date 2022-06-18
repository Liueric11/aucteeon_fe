import storage from 'redux-persist/lib/storage';
import { persistCombineReducers } from 'redux-persist';
import authReducer from './authReducer';
import contohReducer from './contohReducer';

const config = {
  key: 'root',
  storage: storage,
  blacklist: ['authReducer']
};

const reducer = persistCombineReducers(config, {
  authReducer,
  contoh: contohReducer
});

export default reducer;
