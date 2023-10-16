import React, { useState, useEffect } from 'react';
import { Button, Input, Checkbox } from 'antd';
// import Input from '../atoms/input';
import { CloseCircleFilled } from "@ant-design/icons";
import styled from 'styled-components';
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// styled-component는 다른 컴포넌트 밖에 써야함
// 안에 쓰니 에러났음
const TodoListWrapper = styled.div`
    display:flex;
    width:40%;
    margin:20px;
    flex-direction:column;
`;

const TodoList = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(state=>state.todos);
    

    const [todoInput,setTodoInput] = useState("");
    const onChangeTodoInput = (e) => {
        console.log('Change:', e.target.value);
        setTodoInput(e.target.value); 
    }

    const addTodoInput = () => {
        if(todoInput.length===0) {
            alert('내용을 입력해주세요');
            return;
        }
        dispatch(addTodo(todoInput))
        setTodoInput('');
    }

    // const checkTodo = (e) => {
    //     const todoStatus = e.target.checked;
    //     console.log(todoData);
    //     // dispatch(toggleTodo())
    // }

    useEffect(()=>{
        console.log(todoData);
    },[todoData]);

    return (
        <TodoListWrapper>
            <div style={{display:"flex"}}>
                <Input
                    autoFocus
                    type="text"
                    onChange={onChangeTodoInput}
                    value={todoInput}
                    placeholder='할일을 입력하세요'
                />
                <Button 
                    style={{backgroundColor:"#001529", color:"white", marginLeft:"5px"}}
                    onClick={addTodoInput}
                >+</Button>
            </div>
            { todoData?.length>0
                ?
                todoData.map(data=>{
                    return (
                        <div>
                            <Checkbox
                                onChange={()=>dispatch(toggleTodo(parseInt(data.id)))}
                            />
                            {data.done
                                ? <span style={{padding:"0 8px 0 8px", textDecoration:"line-through"}}>{data.text}</span>
                                : <span style={{padding:"0 8px 0 8px"}}>{data.text}</span>
                            }
                            <CloseCircleFilled
                                onClick={()=>dispatch(removeTodo(parseInt(data.id)))}
                            />
                        </div>
                    )
                })
                : <div>할일을 입력해 주세요</div>
            }
        </TodoListWrapper>
    )
}

export default TodoList;