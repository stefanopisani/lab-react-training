import React from 'react';

function IdCard({lastName, firstName, gender, height, birth, picture}) {
return (
    <div className="user-cards">
        <img src={picture} alt="user-pic"/>
        <ul className="user-info"> 
        <li> <b>First Name:</b> {`${firstName}`}</li>
        <li> <b> Last Name:</b> {`${lastName}`}</li>
        <li> <b> Gender:</b> {`${gender}`} </li>
        <li> <b> Height:</b> {`${height}`} </li>
        <li> <b> Birth:</b> {`${birth}`} </li>
        </ul>
    </div>
)
}

export default IdCard;