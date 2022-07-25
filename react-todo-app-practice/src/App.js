import React, { Component } from "react";
import "./App.css";

export default class App extends Component {

  state = {
    todoList: [
      {
        id: 1,
        title: "공부하기",
        finished: false
      }
    ],
    value: ""
  }

  btnStyle = () => {
    return {
      color: "#fff",
      border: "none",
      padding: "5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right"
    }
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      finished: false
    };

    this.setState( {todoList : [...this.state.todoList, newTodo]});

    this.setState({value : ""});
  }

  handleChange = (e) => {
    this.setState({ value : e.target.value });
  }

  handleDelete = (id) => {

    let newTodoList = this.state.todoList.filter((data) => data.id !== id);

    this.setState({ todoList : newTodoList });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

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


          {
            this.state.todoList.map((data) => (
              <div style={this.getStyle()} key={data.id}>
                <input
                  type="checkbox"
                  defaultChecked={data.finished} />
                {data.title}
                <button style={this.btnStyle()} onClick = {() => this.handleDelete(data.id)}>x</button>
              </div>
            ))
          }

        </div>
      </div>
    );
  }
}
