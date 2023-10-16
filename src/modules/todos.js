import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// redux toolkit은 기존의 action, reducer, initState를 createSlice 인자 객체에 통합할 수 있음
    export const todosSlice = createSlice({
        name: 'todos',
        initialState:[],
        reducers: {
        addTodo(state, action) {
            const nextId = 
                state.length>0
                ? Math.max(...state.map((todo) => todo.id)) + 1
                : 1;
            
            state.push({ id: nextId, text: action.payload, done: false });
        },
        toggleTodo(state, action) {
            return state.map((todo) => {
            return todo.id === action.payload
                ? { ...todo, done: !todo.done }
                : todo;
            });
        },
        removeTodo(state, action) {
            return state.filter((todo) => todo.id !== action.payload);
        },
        },
    });
    
    export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
    
    export default todosSlice.reducer;