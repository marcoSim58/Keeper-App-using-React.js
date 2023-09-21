import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(newValue) {
    if (newValue.noteTitle !== "" || newValue.noteContent !== "") {
      setNotes((prevValue) => {
        return [...prevValue, newValue];
      });
    }
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea addItemTo={addItem} />
      {notes.map((note, index) => (
        <Note
          toDelete={deleteItem}
          key={index}
          id={index}
          title={note.noteTitle}
          content={note.noteContent}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
