import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware, devtool 등 추가 가능
});

// export type RootState = ReturnType<typeof store.getState>;
export default store;
