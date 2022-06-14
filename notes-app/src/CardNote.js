import React from "react";
import NoteItem from "./NoteItem";
import NoteEmpty from './NoteEmpty';


function CardNote({data, onDelete, title, onReverse}){
    return(
        <div className="container-note card">
        <h2>{title}</h2>
        <div className="container-grid">
          {(data.length) 
          ? data.map(item => <NoteItem key={item.id} {...item} onDelete={onDelete} onReverse={onReverse}/>) 
          : null}
        </div>
        
        {(!data.length) ? <NoteEmpty/> : null}
        
      </div>
    );
}

export default CardNote;