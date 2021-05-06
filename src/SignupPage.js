import React from 'react';

class Signup extends React.Component{
state= {
    email: '',
    password: '',
    nationality: '',
    showMessage: false
}

handleChange = (event)=> {
    let {name, value} = event.target;

    this.setState({
       [name]: value
    })
}


handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
        showMessage: !this.state.showMessage
     })
}

render(){
    const{email, password, nationality, showMessage} = this.state;
    return(
        <>
            <form onSubmit={this.handleFormSubmit}>
                <label> Email </label>
                <input type="text" name="email" onChange={this.handleChange} value={email} />

                <label> Password </label>
                <input type="password" name="password" onChange={this.handleChange} value={password}/>

                {/* <label> Nationality </label>
                <input type="text" name="nationality" onChange={this.handleChange} value={nationality}/> */}

                <label> Nationality </label>
                <select type="select" name="nationality" onChange={this.handleChange} value={nationality}>
                <option value=""> your nationality </option>
                <option value="en"> EN 🇬🇧 </option>
                <option value="de"> DE 🇩🇪 </option>
                <option value="fr"> FR 🇫🇷 </option>
                </select>

                <button type="submit"> Sign Up </button>
            </form>

            {showMessage ?  
            <div> 
             {nationality==='en' ? <h2>Good Morning!</h2> :
             nationality==='de' ? <h2>Hallo!</h2> :
             <h2> Bonjour!</h2>
              } 
            <p> Your email address is:{email}</p>
            </div>: <p> </p> }
            
        </>
    )
}

}

export default Signup;