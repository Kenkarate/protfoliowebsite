import React, { useState } from 'react'
import TodoLists from './TodoLists';
import '../ToDo/Todo.css';

function ToDo() {
    const [toDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  let today = new Date();
  const locale = "en";
  // const time = today.toLocaleTimeString(locale, {
  //   hour: "numeric",
  //   hour12: true,
  //   minute: "numeric",
  // });
  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const add = () => {
    setToDo((oldItem) => {
      return ([...oldItem, newToDo])
    });
    setNewToDo("")
  }
 

  const deleteItems = (id) => {
    setToDo((oldItem) => { 
      return oldItem.filter((item, index) => {
        return index !== id;
      }
      )
    })
    
  };
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {day} 🌝🖊️☕ </h2>
    </div>

    <div className="input">
      <input
        value={newToDo}
        onChange={(e) => {
          setNewToDo(e.target.value);
        }}
        type="text"
        placeholder="🖊️ Add item..."
      />
      <i
        onClick={add}
        className="fas fa-plus"
      ></i>
    </div>
    <div className="todos">
      {toDo.map((obj, index) => {
        return <TodoLists key={index} id={index} values={obj} 
          onSelect={ deleteItems} />;
      })}
    </div>
  </div>
  )
}

export default ToDo