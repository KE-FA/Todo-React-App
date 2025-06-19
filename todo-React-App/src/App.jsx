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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addedDetails, setDetails] = useState([]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescChange(e) {
    setDescription(e.target.value);
  }

  function handleAddItem(e) {
    e.preventDefault();
    // console.log(title, description)
    const newItem = {
      title: title,
      description: description,
    };

    setDetails(function(prev){
      return [...prev, newItem]
    })

    setTitle("")
    setDescription("")
  }

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
              value={title}
              onChange={handleTitleChange}
            ></input>
          </div>
          <div className="description">
            <label className="the-description">Description:</label>
            <input
              type="text"
              placeholder="Type the description"
              className="desc-input"
              value={description}
              onChange={handleDescChange}
            ></input>
          </div>
          <button className="btn-add" onClick={handleAddItem}>
            Add
          </button>
        </form>
      </div>
      <div>
        {addedDetails.map((item, index) => (
          <TodoList
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
