import React, { useState } from 'react'

export default function List({ todoData, setTodoData, id, title, completed, provided, snapshot }) {

    const [isEditing, setisEditing] = useState(false)
    const [editedTitle, seteditedTitle] = useState(title);

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

    const handleEditChange = (e) => {
        seteditedTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.title = editedTitle;
            }
            return data;
        });
        setTodoData(newTodoData);
        setisEditing(false);
    }

    if (isEditing) {
        return (
            <div
                className={'flex items-center justify-between w-full px-4 py-1 my2 text-gray-600 bg-gray-100 border rounded'}>

                <div className='items-center'>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={editedTitle}
                            className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                            onChange={handleEditChange}
                        />
                    </form>
                </div>
                <div className='items-center'>
                    <button className='px-4 py-2 float-right' onClick={() => setisEditing(false)}>x</button>
                    <button className='px-4 py-2 float-right' type='submit' onClick={handleSubmit}>save</button>
                </div>

            </div>
        )
    }
    else {
        return (

            <div
                key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                className={(snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100') + ' flex items-center justify-between w-full px-4 py-1 my2 text-gray-600 bg-gray-100 border rounded '}>

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
                    <button className='px-4 py-2 float-right' onClick={() => setisEditing(true)}>edit</button>
                </div>

            </div>

        )
    }


}
