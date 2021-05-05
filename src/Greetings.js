import React from 'react';

function Greetings({children, lang}){
    return(
        <div className="greetings">
            {
            lang === "de" ? (<h5> Hallo {children} </h5>) 
            : lang === "fr" ? (<h5> Bonjour {children} </h5>)
            : lang === "es" ? (<h5> Hola {children} </h5>)
            : lang === "en" ? (<h5> Greetings {children} </h5>)
            : (<p> no language, no greetings</p>)
            }
        </div>
    )
}

export default Greetings;