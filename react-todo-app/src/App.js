// 클래스형 컴포넌트
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

export default function App() {

  const [todoData, setTodoData] = useState(initialTodoData);
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

    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));

    // 입력 버튼 누르면 글 입력부분 초기화
    setValue("");
  }

  const handleRemoveClick = () => {
    setTodoData([]);

    localStorage.setItem('todoData', JSON.stringify([]));
  };


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>


        <Lists todoData={todoData} setTodoData={setTodoData} />

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