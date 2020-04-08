import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [item, setItem] = useState("");

  function handleChange(event) {
    var newValue = event.target.value;
    return setItem(newValue);
  }
  return (

    <div className="App">
    <h1>My to-do list</h1>
    <input value={item} onChange={handleChange} placeholder="enter value"></input>
    <button>click me</button>
    <ul>
    <li>{item}</li>
    </ul>

    </div>
  );
}

export default App;
