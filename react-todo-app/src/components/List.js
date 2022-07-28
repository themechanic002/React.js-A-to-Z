import React from 'react'

export default function List({ todoData, setTodoData, id, title, completed, provided, snapshot }) {

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

    return (

        <div
            key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
            className={(snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100') + ' flex items-center justify-between w-full px-4 py-1 my2 text-gray-600 bg-gray-100 border rounded '}
        >

            <div className='items-center'>
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => handleCompletedChange(id)}
                />
                <span className={' pl-2 ' + (completed ? 'line-through' : undefined)}>
                    {title}
                </span>
            </div>
            <div className='items-center'>
                <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>x</button>
            </div>

        </div>

    )
}
