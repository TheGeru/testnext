import { useState } from "react";

const IndexPage = () =>{
    const [showLogin, setShowLogin]= useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handleLoginClick = () =>{
        setShowLogin(true)
    }

    const handleLoginRegister = () =>{
        setShowRegister(true)
    }
    
    return(
        
        <div>
            <button onClick={handleLoginClick}>Inicar Sesion</button>
            <br></br>
            <button onClick={handleLoginRegister}>Registro</button>
        </div>
    );
}

export default IndexPage;