import { useState } from "react";
import "./App.css";

function TodoList({ title, description }) {
  return (
    <div className="todo-list">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="details">
      <div className="header">
        <h1 className="the-header">Todo List</h1>
      </div>
      <div className="inputs">
        <form className="form-input">
          <div className="title">
            <label className="the-title">Title:</label>
            <input
              type="text"
              placeholder="Type the title"
              className="title-input"
            ></input>
          </div>
          <div className="description">
            <label className="the-description">Description:</label>
            <input
              type="text"
              placeholder="Type the description"
              className="desc-input"
            ></input>
          </div>
          <button className="btn-add">Add</button>
        </form>
      </div>
      <div>
        <TodoList  title={"Hello World"} description={"The World is huge"}/>
      </div>
    </div>
    
  );

}

export default App;
