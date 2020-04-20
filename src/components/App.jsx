import React, {useState} from 'react';
// import logo from './logo.svg';
import ToDoItems from "./ToDoItems"
import './App.css';

function App() {

  const [item, setItem] = useState("");
  const [element, setElement] = useState([])
  const day = new Date().getFullYear()

  function handleChange(event) {
    var newValue = event.target.value;
    return setItem(newValue);
  }

  function handleClick() {
    if ( item === "") {
      alert("plase enter a value")
    } else {
      setElement(preValue => {
        return [...preValue, item]
      });
    }
    setItem("")
  }
  function removeItems(id) {
    setElement(preValue => {
      return preValue.filter(
        (item, index) => {
          return id !==index
        }
      )
    })
  }


  return (



    <div className="app-text-font">
    <h1>My to-do list</h1>
    <input className="app-text-font" value={item} onChange={handleChange} placeholder="enter value"></input>
    <br/>
    <button className="app-text-font"

    onClick={handleClick}

    >click me</button>
    <ul className="to-do-item">
    {element.map((listItems, index) => {
      return <ToDoItems
      key={index}
      id={index}
      addOn={listItems}
      remove={removeItems}

      />
    })}
    </ul>

    <footer>Josue copyright {day} </footer>



    </div>
  );
}

export default App;
