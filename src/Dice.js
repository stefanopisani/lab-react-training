import React from 'react';

class Dice extends React.Component{
    state={
        clickedDice: false
    }

    getRandomDice = ()=> {
        this.setState({
            clickedDice: !this.state.clickedDice
        })
    }

    getDelay =()=> {
        
        setTimeout(this.getRandomDice, 1000)
    }

    render() {
    const {clickedDice} = this.state;
    let randomNum = Math.floor(Math.random() * 6 + 1);
    let randomImg = `/img/dice${randomNum}.png`;
       return(
            <>
            {
                clickedDice ? <img onClick={this.getDelay} src={randomImg} className="dice" alt=""/> :
                <img onClick={this.getDelay} src={randomImg} className="dice" alt=""/>
            }
            </>
       ) 
    }
}

export default Dice;