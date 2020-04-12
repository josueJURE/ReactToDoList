import React, {useState} from "react"

function ToDoItems(props) {
  const [line, setLine] = useState(false);

  function handleStyle() {
    setLine(preBoolean => {
      return !preBoolean
    })
  }



  return <li
  style={{textDecoration: line ? "line-through" : "none" }}
  onClick={handleStyle}

  >{props.addOn}</li>
}

export default ToDoItems;
