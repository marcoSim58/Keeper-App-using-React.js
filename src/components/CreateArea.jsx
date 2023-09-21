import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    noteTitle: "",
    noteContent: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={input.noteTitle}
          name="noteTitle"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={input.noteContent}
          name="noteContent"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addItemTo(input);
            event.preventDefault();
            setInput({
              noteTitle: "",
              noteContent: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
