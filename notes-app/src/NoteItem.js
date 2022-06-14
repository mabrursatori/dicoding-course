import React from "react";
import {showFormattedDate} from './utils/index.js'


function NoteItem({id, title, body, createdAt, onDelete}){
    return(
        <div className="note-item">
          <div className="note-title">
            <h4>{title}</h4>
            <button onClick={() => onDelete(id)}></button>
          </div>
          <p className="date">{showFormattedDate(createdAt)}</p>
          <p className="body">{body}</p>
        </div>
    );
}

export default NoteItem;