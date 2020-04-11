import React, {useState} from 'react';
// import logo from './logo.svg';
import ToDoItems from "./ToDoItems"
import './App.css';

function App() {

  const [item, setItem] = useState("");
  const [element, setElement] = useState([])

  function handleChange(event) {
    var newValue = event.target.value;
    return setItem(newValue);
  }

  function handleClick() {
    setElement(preValue => {
      return [...preValue, item]
    });
    setItem("")
  }


  return (

    <div className="App">
    <h1>My to-do list</h1>
    <input value={item} onChange={handleChange} placeholder="enter value"></input>
    <button

    onClick={handleClick}

    >click me</button>
    <ul>
    {element.map(listItems => {
      return <ToDoItems
      addOn={listItems}

      />
    })}
    </ul>

    </div>
  );
}

export default App;
