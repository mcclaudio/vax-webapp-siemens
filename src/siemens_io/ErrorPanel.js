import React from 'react'
import { BiError } from 'react-icons/bi';

function ErrorPanel({ message }) {
    return (
        <div style={{ display: "flex" , justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%"}}>
            <div>
                <BiError size={100} color='orange' />
            </div>
            <div style={{textAlign:"center"}}>
                <div><h3>Errore verso PLC concentratore</h3></div>
                <div>
                    <span>Dettaglio: </span>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default ErrorPanel