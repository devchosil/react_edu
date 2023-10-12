import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';

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
            <Button>테스트용</Button>
        </TodoListWrapper>
    )
}

export default TodoList;