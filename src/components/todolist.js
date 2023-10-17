import React, { useState, useEffect } from 'react';
import { Button, Input, Checkbox } from 'antd';
// import Input from '../atoms/input';
import { EditFilled, DeleteFilled, SaveFilled } from "@ant-design/icons";
import styled from 'styled-components';
import { addTodo, modifyTodo, toggleTodo, removeTodo } from '../modules/todos';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// styled-component는 다른 컴포넌트 밖에 써야함
// 안에 쓰니 에러났음
const TodoListWrapper = styled.div`
    display:flex;
    width:40%;
    margin:35px;
    background-color: #f9f8f3;
    border-radius: 5%;
    padding: 40px;
    flex-direction:column;
`;

const TodoList = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(state=>state.todos);
    

    const [todoInput,setTodoInput] = useState("");
    const [isEdited,setIsEdited] =useState(false);
    const [editedItemId, setEditedItemId] = useState(false);
    const [editedInput, setEditedInput] = useState("");

    const onChangeTodoInput = (e) => {
        setTodoInput(e.target.value); 
    }

    const onChangeEditInput = (e) => {
        setEditedInput(e.target.value)
    }

    const onClickModifyButton = (id) => {
        setIsEdited(true);
        setEditedItemId(id);
    }

    const onClickConfirmButton = (id) => {
        dispatch(modifyTodo({id:parseInt(id), text:editedInput}))
        setIsEdited(false);
        setEditedItemId(id);
    }

    const addTodoInput = () => {
        if(todoInput.length===0) {
            alert('내용을 입력해주세요');
            return;
        }
        dispatch(addTodo(todoInput))
        setTodoInput('');
    }

    useEffect(()=>{
        console.log(todoData);
    },[todoData]);

    return (
        <TodoListWrapper>
            <div style={{display:"flex", marginBottom:"12px"}}>
                <Input
                    autoFocus
                    type="text"
                    onChange={onChangeTodoInput}
                    value={todoInput}
                    placeholder='할일을 입력하세요'
                />
                <Button 
                    style={{backgroundColor:"#ADC4CE", color:"white", marginLeft:"5px"}}
                    onClick={addTodoInput}
                >+</Button>
            </div>
            { todoData?.length>0
                ?
                todoData.map((data,index)=>{
                    return (
                        <div style={{display:"flex"}}>
                            <Checkbox
                                checked={data.done}
                                onChange={()=>dispatch(toggleTodo(parseInt(data.id)))}
                            />
                            {data.done
                                ? <span style={{padding:"0 8px 0 8px", textDecoration:"line-through"}}>{data.text}</span>
                                : isEdited&&(editedItemId === data.id)
                                    ? <Input
                                        style={{margin:"0 8px 0 8px"}} 
                                        // placeholder={data.text}
                                        defaultValue={data.text}
                                        value={editedInput}
                                        onChange={onChangeEditInput}
                                        />
                                    : <span style={{padding:"0 8px 0 8px"}}>{data.text}</span>
                            }
                            {isEdited&&(editedItemId === data.id)
                                ? <SaveFilled 
                                    style={{color:"#96B6C5"}}
                                    onClick={()=>onClickConfirmButton(data.id)} />
                                : <EditFilled
                                    style={{color:"#96B6C5"}}
                                    onClick={()=>onClickModifyButton(data.id)}/>
                            }
                            
                            <DeleteFilled
                                style={{color:"#96B6C5", paddingLeft:"5px"}}
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