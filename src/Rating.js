import React from 'react';

function Rating({children}) {
    let nbOfStars = Math.round(children);
    const divStyle = {
        height: 50,
        width:50
    }
    return(
        <div>
            {
            nbOfStars === 0 ? <div style={divStyle}>☆☆☆☆☆</div>
            : nbOfStars === 1 ? <div style={divStyle}>★☆☆☆☆</div>
            : nbOfStars === 2 ? <div style={divStyle}>★★☆☆☆</div>
            : nbOfStars === 3 ? <div style={divStyle}>★★★☆☆</div>
            : nbOfStars === 4 ? <div style={divStyle}>★★★★☆</div>
            : <div style={divStyle}>★★★★★</div>
            } 
        </div>
    )
}

export default Rating;
// function Rating ({children}) {
//     let nbOfStars = Math.round(this.props.children)
//     if (nbOfStars === 0) return <div>☆☆☆☆☆</div>
//     if (nbOfStars === 1) return <div>★☆☆☆☆</div>
//     if (nbOfStars === 2) return <div>★★☆☆☆</div>
//     if (nbOfStars === 3) return <div>★★★☆☆</div>
//     if (nbOfStars === 4) return <div>★★★★☆</div>
//     return <div>★★★★★</div>
// }

