import React from 'react';
import { Button } from 'antd';
import './App.css';
import LayoutTemplate from '../src/components/layout';
import TodoList from '../src/components/todolist';

// #F9F7F7 연한 그레이
// #DBE2EF 하늘색
// #3F72AF 파란색
// #112D4E 남색

function App() {
  return (
    <LayoutTemplate>
      <TodoList />
    </LayoutTemplate>
  );
}

export default App;
