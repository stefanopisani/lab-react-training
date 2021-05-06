import React from 'react';
import profiles from './data/berlin.json';

class Facebook extends React.Component {
    state={
        profiles: profiles
    }
    
    render(){
        const {profiles} = this.state
        return(
            <>
            {profiles.map((item) => {
                return(
                    <div className="facebook">
                        <div className="facebook-image">
                            <img src={item.img} alt="" style={{height:100, width:80}}/>
                        </div>
                        <div className="facebook-content">
                            <p> <b>First Name:</b> {item.firstName} </p>
                            <p> <b>Last Name:</b> {item.lastName}</p>
                            <p> <b>Country:</b> {item.country}</p>
                            {item.isStudent ? <p> <b>Type:</b> Student</p> : <p> <b>Type:</b> Teacher</p>}
                            
                        </div>

                    </div>
                )
            })}
            
            </>
        )
    }
    
}

export default Facebook;