import { useState } from 'react';
import Form from '../../react-todo-app-practice2/src/components/Form';
import Lists from '../../react-todo-app-practice2/src/components/Lists';
import './App.css';

function App() {

  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault();

    let newTodo = {
      id : Date.now(),
      title : value,
      completed : false
    };

    setTodoList(prev => [...prev, newTodo]);
    setValue('');
  };

  const handleRemoveClick = () => {
    setTodoList([]);
  };


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          
          <h1>할 일 목록</h1>

          <button onClick={handleRemoveClick}>Delete All</button>

        </div>
        
          <Lists todoList = {todoList} setTodoList = {setTodoList}></Lists>

          <Form value = {value} setValue = {setValue} handleSubmit = {handleSubmit}></Form>
      </div>
    </div>
  );
}

export default App;
