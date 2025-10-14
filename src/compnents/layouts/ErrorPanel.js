import React from 'react'
import { BiError } from 'react-icons/bi';

function ErrorPanel({ message }) {
    return (
        <div style={{ display: "flex" , justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%"}}>
            <div>
                <BiError size={100} color='orange' />
            </div>
            <div>
                {message}
            </div>
        </div>
    )
}

export default ErrorPanel