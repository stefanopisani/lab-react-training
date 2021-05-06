import React from 'react';

class Carousel extends React.Component {
state = {
    photoNum: 0
}

clickLeft = ()=> {
    console.log('clickin left')
    const {photoNum} = this.state;

    if (photoNum>0 && photoNum<=3) {
        this.setState({
            photoNum: photoNum -1
        })
        console.log(photoNum);
    } else if (photoNum === 0){
        this.setState({
            photoNum: 3
        })
    } console.log(photoNum);
}

clickRight = ()=> {
    console.log('clickin right')
    const {photoNum} = this.state;

    if (photoNum>=0 && photoNum<3) {
        this.setState({
            photoNum: photoNum +1
        }) 
        console.log(photoNum);
    } else if (photoNum === 3){
        this.setState({
            photoNum: 0
        })
    } 
}

render() {
    const {photoNum} = this.state;
    return (
        <>
        <button onClick={this.clickLeft} >left</button>
        <img src={this.props.imgs[photoNum]} alt="" />
        <button onClick={this.clickRight} >right</button>
        </>
    )
}

}

export default Carousel;