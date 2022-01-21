import React from 'react'

function TodoForm({ setInputText,todos,setTodos,inputText }) {
    const inputTextHandler=(e)=>{
          setInputText(e.target.value);
      };
const submitTodoHandler = (e) => {
  e.preventDefault();
  setTodos([
    ...todos,{text:inputText,completed:false,id:Math.random()*10}
  ])
  setInputText("");              
};

    return (
      <form>
      <input value={inputText} 
      onChange={inputTextHandler}           
       type="text"
        placeholder='add list here...'/>
      <button onClick={submitTodoHandler}  type="submit">
        add
      </button>
      </form>
    );
};

export default TodoForm
