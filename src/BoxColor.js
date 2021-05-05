import React from 'react';

function BoxColor({r,g,b}){
    
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        height: 100,
        border: '1px solid black',
        width:300
    }
    return (
    <div style={divStyle}>
    <p> {divStyle.backgroundColor} </p>
    </div>
)
}

export default BoxColor;

// height:100, 
//         border: '1, solid, black',
//         backgroundColor: `rgb(${r},${g},${b})`