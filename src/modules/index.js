import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';
import storage from 'redux-persist/lib/storage';
import { persistReducer  } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  // middleware, devtool 등 추가 가능
});

// export type RootState = ReturnType<typeof store.getState>;
export default store;
