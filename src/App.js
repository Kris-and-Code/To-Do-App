import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addToDo = () => {
    if (toDo.trim()) {
      const newToDo = {
        id: Date.now(),
        text: toDo.trim(),
        isCompleted: false,
      };
      setToDos([...toDos, newToDo]);
      setToDo('');
    }
  };

  const deleteToDo = (id) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  const toggleComplete = (id) => {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo
    );
    setToDos(updatedToDos);
  };

  const updateToDo = (id, updatedText) => {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, text: updatedText } : toDo
    );
    setToDos(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Sundayyy 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <FontAwesomeIcon
          icon={faPlus}
          onClick={addToDo}
          className="plusIcon"
        />
      </div>
      <div className="todos">
        {toDos.map((toDo) => (
          <div key={toDo.id} className={`todo ${toDo.isCompleted ? 'completed' : ''}`}>
            <div className="left">
              <input
                type="checkbox"
                name=""
                id=""
                checked={toDo.isCompleted}
                onChange={() => toggleComplete(toDo.id)}
              />
              <p>{toDo.text}</p>
            </div>
            <div className="right">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => deleteToDo(toDo.id)}
                className="deleteIcon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;