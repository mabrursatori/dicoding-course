import React from "react";
import NoteItem from "./NoteItem";
import NoteEmpty from './NoteEmpty';


function CardNote({data, onDelete}){
    return(
        <div className="container-note card right">
        
        {(data.length) 
        ? data.map(item => <NoteItem key={item.id} {...item} onDelete={onDelete}/>) 
        : <NoteEmpty/>}
        
        
      </div>
    );
}

export default CardNote;