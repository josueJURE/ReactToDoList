import React  from "react"
import './App.css';

function ToDoItems(props) {






  return <li



  onClick={() => {props.remove(props.id)} }

  >{props.addOn}</li>
}

export default ToDoItems;
