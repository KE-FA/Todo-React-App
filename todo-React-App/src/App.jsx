import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div className="details">
      <div className="header">
        <h1 className="the-header">Todo List</h1>
      </div>
      <div className="inputs">
        <div className="title">
          <h2 className="the-title">Title:</h2>
          <input type="text" placeholder="Type the title" className="title-input"></input>
        </div>
        <div className="description">
          <h2 className="the-description">Description:</h2>
          <input type="text" placeholder="Type the description" className="desc-input"></input>
        </div>
      </div>
    </div>
  );
}
function App() {
  // const [count, setCount] = useState(0)

  return <Header />;
}

export default App;
