import React from 'react'

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

    return (

        /* Map 메소드 사용하는 방법 */
        <div>
            {todoData.map((data) => (
                <div key={data.id}>
                    <div className='flex items-center justify-between w-full px-4 py-1 my2 text-gray-600 bg-gray-100 border rounded'>
                        <div className='items-center'>
                            <input
                                type="checkbox"
                                defaultChecked={data.completed}
                                onChange={() => handleCompletedChange(data.id)}
                            />
                            <span className= {' pl-2 ' + (data.completed ? 'line-through' : undefined)}>
                                {data.title}
                            </span>
                        </div>
                        <div className='items-center'>
                            <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>x</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>


        /* 노가다 방법
    
             <div style={this.getStyle()}>
              <input type="checkbox" defaultChecked={false}/>
              공부하기
              <button style={this.btnStyle}>x</button>
            </div> */

    )
}
