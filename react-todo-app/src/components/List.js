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
                    <input
                        type="checkbox"
                        defaultChecked={data.completed}
                        onChange={() => handleCompletedChange(data.id)}
                    />
                    {data.title}
                    <button onClick={() => handleClick(data.id)}>x</button>
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
