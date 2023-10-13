import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { addTodo, toggleTodo } from '../modules/todos';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const TodoList = () => {

    const TodoListWrapper = styled.div`
        display:flex;
        width:40%;
        /* width:40%;
        height: 80%; */
        margin:20px;
        flex-direction:column;
        /* justify-items:center; */
    `;

    const dispatch = useDispatch();
    const testData = useSelector(state=>state);
    
    useEffect(()=>{
        console.log(testData);
    })

    const [todoInput,setTodoInput] = useState();
    const onChangeTodoInput = (e) => setTodoInput(e.target.value);

    return (
        <TodoListWrapper>
            <div style={{display:"flex"}}>
                <Input
                    autoFocus
                    onChange={onChangeTodoInput}
                    value={todoInput}
                    placeholder='할일을 입력하세요'
                />
                <Button style={{backgroundColor:"#3F72AF"}}>+</Button>
            </div>
            <div>ㅎㅇ</div>
            <div>하이</div>
            <Button onClick={() => dispatch(addTodo('테스트입니다.'))}>테스트용</Button>
        </TodoListWrapper>
    )
}

export default TodoList;