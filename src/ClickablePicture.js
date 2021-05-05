import React from 'react';

class ClickablePicture extends React.Component {
    state= {
        hasGlasses: false
    } 

    changeGlasses = () => {
        this.setState({
            hasGlasses: !this.state.hasGlasses
        })
    }

    render() {
        const { hasGlasses } = this.state;
        return(
            <div>
                {
                    hasGlasses===true ? ( <img onClick={this.changeGlasses} class="clickable-pic"src="/img/persons/maxence.png" alt=""/>)
                    : (<img onClick={this.changeGlasses} class="clickable-pic"src="/img/persons/maxence-glasses.png"  alt=""/>)
                }
            </div>
        )
    }
}

export default ClickablePicture;