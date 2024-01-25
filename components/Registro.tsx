import Link from "next/link";
import { useState } from "react";
import formStyle from "../styles/formStyle.module.css"

type RegisterProps = {
    onClose: () => void;
  };

  const Registro: React.FC<RegisterProps> = ({ onClose }) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handledRegister = () =>{
        console.log(`Email: ${email} | y | Password: ${password}`);
            
    }
return(
    <div className={formStyle.modal}>
        <div className={formStyle.modal_content}>
            <h2>Registrarse</h2>
            <label htmlFor="email">Correo: </label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{
                e.preventDefault();
                setEmail(e.target.value);
            }}/>
            <br />
            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password"  value={password} onChange={(e)=>{
                e.preventDefault();
                setPassword(e.target.value);
            }}/>
            <br />
            <button onClick={handledRegister}>Registrarse</button>
            <p>¿Ya tienes cuenta? <Link href="#">Inicia sesion</Link></p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
)

}

export default Registro;