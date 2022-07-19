// 클래스형 컴포넌트
import React, {Component} from "react";
import "./App.css";

export default class App extends Component {

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

  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false}/>
            공부하기
            <button style={this.btnStyle}>x</button>
          </div>
          
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