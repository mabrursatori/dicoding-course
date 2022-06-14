import React from 'react';

function Card({children, type, position}){
    return(
    <div className={`${type} card ${position}`}>
        {children}
    </div>
    );
}

export default Card;