import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import List from './List';

export default function Lists({ todoData, setTodoData }) {

    const handleEnd = (result) => {
        if(!result.destination) return;

        const newTodoData = todoData;

        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        newTodoData.splice(result.destination.index, 0, reorderedItem);

        setTodoData(newTodoData);

        localStorage.setItem('todoData', JSON.stringify(newTodoData));
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
                                        
                                        // map으로 만들었기 때문에 props로 넘겨주지 않더라도 key를 입력해야함.
                                        <List key={data.id} todoData = {todoData} setTodoData = {setTodoData} id = {data.id} title = {data.title} completed = {data.completed} provided = {provided} snapshot = {snapshot}/>

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
