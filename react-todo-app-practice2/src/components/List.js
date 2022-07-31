import React from 'react'

const List = React.memo(({ id, title, completed, todoList, setTodoList, provided, snapshot }) => {

  const handleCheck = (id) => {
    const todoList2 = todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(todoList2);
  };

  const handleClick = (id) => {
    const todoList2 = todoList.filter((todo) => todo.id !== id);
    setTodoList(todoList2);
  };

  return (
    <div key={id} className={(snapshot.isDragging ? 'bg-green-200 ' : 'bg-gray-100 ') + 'flex w-full py-3 px-2 rounded shadow'}
      ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
      <input
        type='checkbox'
        onChange={() => handleCheck(id)}
      />
      <span className={'pl-2 w-full' + (completed ? ' line-through' : ' no-underline')}>
        {title}
      </span>
      <button className='float-right pr-4' onClick={() => handleClick(id)}>x</button>
    </div>
  )
});

export default List