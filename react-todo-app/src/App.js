// 클래스형 컴포넌트
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {

  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      },
      {
        id: "3",
        title: "운동하기",
        completed: false
      }
    ],
    value: ""
  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  // 줄 긋기 여부
  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }



  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);

    this.setState({ todoData: newTodoData });

    console.log('newTodoData', newTodoData);
  }

  handleChange = (e) => {
    this.setState({ value : e.target.value });
  }

  handleSubmit = (e) => {
    // 입력 버튼 클릭 시 페이지가 새로고침 되는 걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    };

    // 원래 있던 데이터 리스트에 새로운 항목 추가
    this.setState({ todoData: [...this.state.todoData, newTodo] });

    // 입력 버튼 누르면 글 입력부분 초기화
    this.setState({ value : "" });
  }

  handleCompletedChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id){
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({todoData : newTodoData});
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>


          {/* Map 메소드 사용하는 방법 */}

          {this.state.todoData.map((data) => (
            <div style={this.listStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={data.completed}
                onChange={() => this.handleCompletedChange(data.id)}
                />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}


          {/* 노가다 방법

           <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false}/>
            공부하기
            <button style={this.btnStyle}>x</button>
          </div> */}


          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />

          </form>

        </div>
      </div>
    );
  }
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