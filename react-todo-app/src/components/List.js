import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function List({ todoData, setTodoData }) {





    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);

        setTodoData(newTodoData);

        console.log('newTodoData', newTodoData);
    }

    const handleCompletedChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);
    }

    const handleEnd = (result) => {
        if(!result.destination) return;

        const newTodoData = todoData;

        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        newTodoData.splice(result.destination.index, 0, reorderedItem);

        setTodoData(newTodoData);
    }

    return (

        /* Map 메소드 사용하는 방법 */
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                                            className={(snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100') + ' flex items-center justify-between w-full px-4 py-1 my2 text-gray-600 bg-gray-100 border rounded '}
                                        >

                                            <div className='items-center'>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={data.completed}
                                                    onChange={() => handleCompletedChange(data.id)}
                                                />
                                                <span className={' pl-2 ' + (data.completed ? 'line-through' : undefined)}>
                                                    {data.title}
                                                </span>
                                            </div>
                                            <div className='items-center'>
                                                <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>x</button>
                                            </div>

                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </div>


        /* 노가다 방법
    
             <div style={this.getStyle()}>
              <input type="checkbox" defaultChecked={false}/>
              공부하기
              <button style={this.btnStyle}>x</button>
            </div> */

    )
}
