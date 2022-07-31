import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ todoList, setTodoList }) => {

  const handleOnDragEnd = (e) => {
    if(!e.destination) return;
    const newTodoList = todoList;
    let [reorderedItem] = newTodoList.splice(e.source.index, 1);
    newTodoList.splice(e.destination.index, 0, reorderedItem);
    setTodoList(newTodoList);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='todos'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>

            {todoList.map((data, index) =>
              <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                {(provided, snapshot) => (
                  <List
                    key={data.id} id={data.id} title={data.title} completed={data.completed} todoList={todoList} setTodoList={setTodoList}
                    provided={provided} snapshot={snapshot}
                  ></List>
                )}
              </Draggable>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
});

export default Lists