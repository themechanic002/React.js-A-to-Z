// 클래스형 컴포넌트
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // 입력 버튼 클릭 시 페이지가 새로고침 되는 걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };

    // 원래 있던 데이터 리스트에 새로운 항목 추가
    setTodoData(prev => [...prev, newTodo]);

    // 입력 버튼 누르면 글 입력부분 초기화
    setValue("");
  }


  return (
    <div>
      <div>
        <div>
          <h1>할 일 목록</h1>
          
        </div>


        <List todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />


      </div>
    </div>
  );
}




// 함수형 컴포넌트
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
 */