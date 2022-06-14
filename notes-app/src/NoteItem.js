import React from "react";
import {showFormattedDate} from './utils/index.js'


function NoteItem({id, title, body, createdAt, archived ,onDelete, onReverse}){
    return(
        <div className="note-item">
          <div className="note-title">
            <h4>{title}</h4>
            <div>
            <button 
            className={`${archived ? 'btn-undo' : 'btn-check'}`} 
            onClick={() => onReverse(id)}></button>
            <button className="btn-trash" onClick={() => onDelete(id)}></button>
            </div>
            
          </div>
          <p className="date">{showFormattedDate(createdAt)}</p>
          <p className="body">{body}</p>
        </div>
    );
}

export default NoteItem;