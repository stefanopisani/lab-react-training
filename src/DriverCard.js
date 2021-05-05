import React from 'react';
import Rating from './Rating';

function DriverCard({name, img, car, rating}) {
return(
    <div className="driver-card">
        <img src={img}/>
        <div className="driver-content">
            <h1> {name} </h1>
            <div className="driver-rating"> 
            <Rating>{rating}</Rating>
            </div>
            {/* <p> {rating} </p> */}
            <p> {car.model} - {car.licensePlate}</p>
        </div>
    </div>
)
}

export default DriverCard;