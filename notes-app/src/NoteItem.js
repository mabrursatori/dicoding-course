import React from 'react';

function NoteItem({id, title, description, onDelete}){
    return(
        <div className="note-item">
          <div className="note-title">
            <h4>{title}</h4>
            <button onClick={() => {onDelete(id)}}></button>
          </div>
          <p>{description}</p>
        </div>
    );
}

export default NoteItem;