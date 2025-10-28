import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim()) {
      const newNote = {
        id: Date.now(),
        content: text,
        color: randomColor(),
      };
      setNotes([...notes, newNote]);
      setText("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const randomColor = () => {
    const colors = ["#FFB6C1", "#B39DDB", "#AED581", "#FFCC80", "#81D4FA"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="app">
      <h1> My Notes Apps..</h1>
      <div className="input-area">
        <textarea
          placeholder="Write a note.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note"
            style={{ backgroundColor: note.color }}
          >
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
