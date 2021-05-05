import React from 'react';

class LikeButton extends React.Component {
    state = {
        counter: 0
    }
incrementCounter = () => {
    this.setState({
        counter: this.state.counter +1
    })
}
    render(){
        const{counter} = this.state;
        return(
            <div>
                <h2 style={{fontWeight:100}}> <img src="/img/like.svg" alt="like" style={{height:30, width:30}}/> {counter} </h2>
                <button onClick={this.incrementCounter}> 👍🏻 Like </button>
            </div>
        )
    }
}

export default LikeButton;