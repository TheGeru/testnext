"use client"

import { useState } from "react";
import React from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(false)

    return (
        <div>
            <p>Haz echo click {counter}</p>
            <button onClick={() =>{
                setCounter(counter + 1)
            }}>
                Haz click
            </button>
            <button onClick={()=>{
                setCounter(0)
            }}>
                Restablecer contador
            </button><br></br>
            <button onClick={() => {
                setShowMessage(!showMessage)
            }}>{!showMessage ? "Mostrar Mensaje": "Ocultar mensaje"}
            </button>
            {
                showMessage && <p>Hola mundo</p>
            }
        </div>
    );
}

export default Counter;
