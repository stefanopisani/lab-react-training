import React from 'react';


function NumbersTable({limit}) {
    let numbers = [];
    for (let i=0 ; i<= limit ; i++ ){
            numbers.push(i);
    }
    
    
    return(
        <>
        <div className="numbers-table"> 
        {numbers.map((number) =>{
            return(
                <>
                { number%2===0 ?
                    <div style={{border: '2px solid black',backgroundColor: 'red', height:100 , width: 100}}> {number} </div> :
                    <div style={{border: '2px solid black', height:100 , width: 100}}> {number} </div>
                }
                
                </>
            )
        })}
        </div>
        </>
    )
}


export default NumbersTable;