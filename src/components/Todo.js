import React from 'react'

function Todo({text,todo,setTodos, todos}) {

const completeHandler=()=>{
    setTodos(
        todos.map((item)=>{
            if (item.id===todo.id){           
                return{
                    ...item,completed:!item.completed,
                };
            }
            return item;         
        })
    );     
};

return (
<div>

    <li className={`todo-item ${todo.completed?"completed":""}`}>
        <input type="checkbox"  onClick={completeHandler} />
        {text} </li>
</div>
    );
};

export default Todo
