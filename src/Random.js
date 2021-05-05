import React from 'react';

function Random({min, max}){ 
    let random = Math.floor(Math.random() * (max - min) + min)
    return(
     <div className="greetings"> 
     <p> Random value between {min} and {max} = {random} </p>
     </div>
    )
}

export default Random;