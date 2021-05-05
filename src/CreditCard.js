import React from 'react';

function cardHide(card){
    let hideNum=[];
    for(let i = 0; i < card.length; i++){
        if(i < card.length-4){
          hideNum.push("*");
        }else{
          hideNum.push(card[i]);
        }
      } return hideNum.join("");
}

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    let hideNum = cardHide(number);

    return (
        <div className="credit-card" style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
            height:240,
            width:400
        }}>
            <div className="logo">
            {
            type==="Visa" ? (<img src="/img/visa.png"/>)
            : (<img src="/img/master-card.svg"/>)
            }
            </div>
            <div className="number">
                <h1> {hideNum} </h1>
            </div>
            <div className="details">
                <p> Expires: {expirationMonth}/{expirationYear} <span>{bank} </span>  </p>
                <p className="details-p"> {owner} </p>
            </div>
        </div>
    )
}

export default CreditCard;