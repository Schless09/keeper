import React from "react";
import { TrashFill } from "react-bootstrap-icons";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <TrashFill size={18} />
      </button>
    </div>
  );
}

export default Note;
