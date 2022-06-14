import React from "react";


function NoteItem({id, title, note, onDelete}){
    return(
        <div className="note-item">
          <div className="note-title">
            <h4>{title}</h4>
            <button onClick={() => onDelete(id)}></button>
          </div>
          <p>{note}</p>
        </div>
    );
}

export default NoteItem;